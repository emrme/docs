import { join, parse } from "path";
import { createInterface } from "readline";
import pkg from "fs-extra";

const { readdir, createReadStream, writeFile, readFile } = pkg;
// This script is not part of faast.js, but rather a tool to rewrite some parts
// of the generated docs from api-generator and api-documenter so they work with
// the website generated by docusaurus.

const outDir = "./docs/typescript/reference";
const packageRoot = "./submodules/js/packages/sdk";
const inDir = packageRoot + "/docs/evm";

try {
  pkg.rmdirSync(outDir, { recursive: true, force: true });
} catch {
  // no-op
}
pkg.ensureDirSync(outDir);

async function main() {
  const docFiles = await readdir(inDir);
  for (const docFile of docFiles) {
    try {
      const { name: id, ext } = parse(docFile);
      if (ext !== ".md") {
        continue;
      }

      const docPath = join(inDir, docFile);
      const docPathOut = join(outDir, docFile);
      const input = createReadStream(docPath);
      const output = [];
      const lines = createInterface({
        input,
        crlfDelay: Infinity,
      });

      let title = "";
      lines.on("line", (line) => {
        let skip = false;
        if (!title) {
          const titleLine = line.match(/## (.*)/);
          if (titleLine) {
            title = titleLine[1];
          }
        }

        const homeLink = line.match(/\[Home\]\(.\/index\.md\) &gt; (.*)/);
        if (homeLink) {
          //skip the breadcrumb line altogether
          return;
        }
        // See issue #4. api-documenter expects \| to escape table
        // column delimiters, but docusaurus uses a markdown processor
        // that doesn't support this. Replace with an escape sequence
        // that renders |.
        if (line.startsWith("|")) {
          line = line.replace(/\\\|/g, "&#124;");
        }
        if (line.includes("<b>")) {
          line = line.replace(/<b>/g, "**");
        }
        if (line.includes("</b>")) {
          line = line.replace(/<\/b>/g, "**");
        }
        if (line.includes("<!-- -->")) {
          line = line.replace(/<!-- -->/g, "");
        }

        // If the line includes a markdown link to a /typescript/ path, replace it with a /typescript/reference/ path
        if (line.includes("](/typescript/")) {
          line = line.replaceAll("](/typescript/", "](/typescript/reference/");
        }

        output.push(line);
      });

      await new Promise((resolve) => lines.once("close", resolve));
      input.close();

      const header = [
        "---",
        // If ID is index, then the slug should be /reference
        `slug: /reference/${id === "index" ? "" : id}`,
        `title: ${title}`,
        `hide_title: true`,
        `displayed_sidebar: typescript`,
        "---",
      ];

      const titleLineIndex = output.findIndex((line) => line.startsWith("##"));
      output[titleLineIndex] = output[titleLineIndex].replace("##", "#");

      // The signature line is the first line that starts with "**Signature:**"
      const signatureLine = output.findIndex((line) =>
        line.startsWith("**Signature:**"),
      );

      // Example line is the first line that starts with "**Example:**"
      const exampleLine = output.findIndex((line) =>
        line.startsWith("## Example"),
      );

      // Edit the array so that every string that comes after example line (inclusive) is
      // moved to be before the signature line.
      if (exampleLine > -1) {
        const exampleLines = output.splice(exampleLine);
        output.splice(signatureLine, 0, ...exampleLines);
      }

      await writeFile(docPathOut, header.concat(output).join("\n"));
    } catch (err) {
      console.error(`Could not process ${docFile}: ${err}`);
    }
  }
}

// TEMP: Don't generate the full reference right now...
// main();
