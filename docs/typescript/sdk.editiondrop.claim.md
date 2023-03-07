---
slug: /sdk.editiondrop.claim
title: EditionDrop.claim property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# EditionDrop.claim property

Claim a token to the connected wallet

**Signature:**

```typescript
claim: {
        (tokenId: BigNumberish, quantity: BigNumberish, checkERC20Allowance?: any): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish, quantity: BigNumberish, checkERC20Allowance?: any) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

See [EditionDrop.claimTo](./sdk.editiondrop.claimto.md)