---
slug: /reference/sdk.tokendrop
title: TokenDrop class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# TokenDrop class

Create a Drop contract for a standard crypto token or cryptocurrency.

## Example

```javascript
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK("{{chainName}}");
const contract = await sdk.getContract("{{contract_address}}", "token-drop");
```

## Constructors

| Constructor                                                                                                          | Modifiers | Description                                                   |
| -------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------- |
| [(constructor)(network, address, storage, options, abi, chainId, contractWrapper)](./sdk.tokendrop._constructor_.md) |           | Constructs a new instance of the <code>TokenDrop</code> class |

## Properties

| Property                                              | Modifiers           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Description                                           |
| ----------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [abi](./sdk.tokendrop.abi.md)                         |                     | [Abi](./sdk.abi.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                       |
| [app](./sdk.tokendrop.app.md)                         |                     | [ContractAppURI](./sdk.contractappuri.md)&lt;PrebuiltTokenDrop&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                       |
| [burnFrom](./sdk.tokendrop.burnfrom.md)               |                     | { (holder: string, amount: string &#124; number): Promise&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;; prepare: (holder: string, amount: string &#124; number) =&gt; Promise&lt;[Transaction](./sdk.transaction.md)&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;&gt;; }                                                                               | Burn Tokens                                           |
| [burnTokens](./sdk.tokendrop.burntokens.md)           |                     | { (amount: string &#124; number): Promise&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;; prepare: (amount: string &#124; number) =&gt; Promise&lt;[Transaction](./sdk.transaction.md)&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;&gt;; }                                                                                                               | Burn Tokens                                           |
| [claim](./sdk.tokendrop.claim.md)                     |                     | { (amount: string &#124; number, checkERC20Allowance?: any): Promise&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;; prepare: (amount: string &#124; number, checkERC20Allowance?: any) =&gt; Promise&lt;[Transaction](./sdk.transaction.md)&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;&gt;; }                                                         | Claim a certain amount of tokens                      |
| [claimConditions](./sdk.tokendrop.claimconditions.md) |                     | [DropClaimConditions](./sdk.dropclaimconditions.md)&lt;PrebuiltTokenDrop&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Configure claim conditions                            |
| [claimTo](./sdk.tokendrop.claimto.md)                 |                     | { (destinationAddress: string, amount: string &#124; number, checkERC20Allowance?: any): Promise&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;; prepare: (destinationAddress: string, amount: string &#124; number, checkERC20Allowance?: any) =&gt; Promise&lt;[Transaction](./sdk.transaction.md)&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;&gt;&gt;; } | Claim a certain amount of tokens to a specific Wallet |
| [contractRoles](./sdk.tokendrop.contractroles.md)     | <code>static</code> | readonly \["admin", "transfer"\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                       |
| [encoder](./sdk.tokendrop.encoder.md)                 |                     | [ContractEncoder](./sdk.contractencoder.md)&lt;PrebuiltTokenDrop&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                       |
| [estimator](./sdk.tokendrop.estimator.md)             |                     | [GasCostEstimator](./sdk.gascostestimator.md)&lt;PrebuiltTokenDrop&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                       |
| [events](./sdk.tokendrop.events.md)                   |                     | [ContractEvents](./sdk.contractevents.md)&lt;PrebuiltTokenDrop&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                       |
| [metadata](./sdk.tokendrop.metadata.md)               |                     | [ContractMetadata](./sdk.contractmetadata.md)&lt;PrebuiltTokenDrop, typeof DropErc20ContractSchema&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                       |
| [platformFees](./sdk.tokendrop.platformfees.md)       |                     | [ContractPlatformFee](./sdk.contractplatformfee.md)&lt;PrebuiltTokenDrop&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                       |
| [roles](./sdk.tokendrop.roles.md)                     |                     | [ContractRoles](./sdk.contractroles.md)&lt;PrebuiltTokenDrop, (typeof [TokenDrop.contractRoles](./sdk.tokendrop.contractroles.md))\[number\]&gt;                                                                                                                                                                                                                                                                                                                                                                                                         |                                                       |
| [sales](./sdk.tokendrop.sales.md)                     |                     | [ContractPrimarySale](./sdk.contractprimarysale.md)&lt;PrebuiltTokenDrop&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                       |

## Methods

| Method                                                            | Modifiers | Description                                              |
| ----------------------------------------------------------------- | --------- | -------------------------------------------------------- |
| [getDelegation()](./sdk.tokendrop.getdelegation.md)               |           | Get your voting delegatee address                        |
| [getDelegationOf(account)](./sdk.tokendrop.getdelegationof.md)    |           | Get a specific address voting delegatee address          |
| [getVoteBalance()](./sdk.tokendrop.getvotebalance.md)             |           | Get your wallet voting power for the current checkpoints |
| [getVoteBalanceOf(account)](./sdk.tokendrop.getvotebalanceof.md)  |           |                                                          |
| [isTransferRestricted()](./sdk.tokendrop.istransferrestricted.md) |           | Get whether users can transfer tokens from this contract |

**Signature:**

```typescript
export declare class TokenDrop extends StandardErc20<PrebuiltTokenDrop>
```

**Extends:** [StandardErc20](./sdk.standarderc20.md)&lt;PrebuiltTokenDrop&gt;