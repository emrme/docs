---
slug: /reference/sdk.split.withdraw
title: Split.withdraw property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Split.withdraw property

Withdraw Funds

## Example

```javascript
// the wallet address that wants to withdraw their funds
const walletAddress = "{{wallet_address}}";
await contract.withdraw(walletAddress);
```

**Signature:**

```typescript
withdraw: {
        (walletAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (walletAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

Triggers a transfer to account of the amount of native currency they are owed.