---
slug: /reference/sdk.erc20.mint
title: Erc20.mint property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc20.mint property

Mint tokens

## Example

```javascript
const amount = "1.5"; // The amount of this token you want to mint
await contract.erc20.mint(amount);
```

**Signature:**

```typescript
mint: {
        (amount: string | number): Promise<Omit<{
            receipt: ethers.providers.TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (amount: string | number) => Promise<Transaction<Omit<{
            receipt: ethers.providers.TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

Mint tokens to the connected wallet.