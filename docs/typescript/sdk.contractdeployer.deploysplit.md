---
slug: /sdk.contractdeployer.deploysplit
title: ContractDeployer.deploySplit() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ContractDeployer.deploySplit() method

Deploys a new Split contract

## Example

```javascript
const contractAddress = await sdk.deployer.deploySplit({
  name: "My Split",
  primary_sale_recipient: "your-address",
  recipients: [
    {
      address: "your-address",
      sharesBps: 80 * 100, // 80%
    },
    {
      address: "another-address",
      sharesBps: 20 * 100, // 20%
    },
  ],
});
```

**Signature:**

```typescript
deploySplit(metadata: SplitContractDeployMetadata): Promise<string>;
```

## Parameters

| Parameter | Type                                                                | Description           |
| --------- | ------------------------------------------------------------------- | --------------------- |
| metadata  | [SplitContractDeployMetadata](./sdk.splitcontractdeploymetadata.md) | the contract metadata |

**Returns:**

Promise&lt;string&gt;

the address of the deployed contract

## Remarks

Deploys a Split contract and returns the address of the deployed contract