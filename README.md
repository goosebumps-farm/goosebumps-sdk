# Goose Bumps TypeScript SDK

Goose Bumps is a novel DeFi / GameFi protocol on Sui Network inspired from Chicken Bonds but entirely redesigned to suit our objectives and Sui capabilities. The protocol contributes to stabilizing BUCK price, reducing its circulation and promoting its adoption within the DeFi ecosystem. BUCK is an over-collateralized stablecoin issued by Bucket Protocol and it is the first native stablecoin on Sui.

## Install Gose Bumps TypeScript SDK
`npm i goosebumps-sdk`

## Instantiate Gose Bumps TypeScript SDK
```ts
import { GooseClient } from "goosebumps-sdk";
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

// Instantiate SuiClient connected to testnet
const suiClient = new SuiClient({ url: getFullnodeUrl('testnet') });

// Connect Sui SDK client to Goose SDK client
const gooseClient = new GooseClient(suiClient);
```