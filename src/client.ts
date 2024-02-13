import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock, TransactionResult } from "@mysten/sui.js/transactions";
import { SUI_CLOCK_OBJECT_ID } from '@mysten/sui.js/utils';

const PACKAGE_ID = "";

export class GooseClient {
  /**
   * @description Goose Bonds SDK.
   * @param client connection to fullnode
   * @param currentAddress (optional) address of the current user (default: DUMMY_ADDRESS)
   */

  private client: SuiClient;
  public currentAddress;

  constructor(
    client: SuiClient,
    currentAddress: string,
  ) {
    this.client = client;
    this.currentAddress = currentAddress;
  }

  createRequest(
    txb: TransactionBlock,
    currentAddress: string,
    coin: string
  ): TransactionResult {
    /**
     * @description get CompoundRequest + DepositRequest
     * @param currentAddress Current Address of SuiClient instantiation
     * @param coin Coin Type
     * @returns TransactionResult
     */

    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bond::request_create`,
      typeArguments: [coin],
      arguments: [],
    });
  }

  depositToBucketTank(
    txb: TransactionBlock,
    currentAddress: string,
    vault: string,
    compoundRequest: string,
    depositRequest: string,
    bp: string,
    oracle: string,
    bktTreasury: string,
  ): TransactionResult {
    /**
     * @description deposit to tank
     * @param txb TransactionBlock
     * @param currentAddress Current Address of SuiClient instantiation
     * @param vault vault you are depositing to
     * @param compoundRequest CompoundRequest object
     * @param depositRequest DepositRequest object
     * @param bp bucket
     * @param oracle oracle
     * @param bktTreasury treasury
     * @returns TransactionResult
     */

    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bucket_tank::deposit`,
      typeArguments: [],
      arguments: [txb.object(vault), txb.object(compoundRequest), txb.object(depositRequest), txb.object(bp), txb.object(oracle), txb.object(bktTreasury), txb.object(SUI_CLOCK_OBJECT_ID)],
    });
  }

  createBond(
    txb: TransactionBlock,
    compoundRequest: string,
    depositRequest: string,
    currentAddress: string,
  ): TransactionResult {
    /**
     * @description destroy CompoundRequest + DepositRequest and receive NFT
     * @param compoundRequest CompoundRequest object
     * @param depositRequest DepositRequest object
     * @returns TransactionResult
     */

    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bond::create`,
      typeArguments: [],
      arguments: [txb.object(SUI_CLOCK_OBJECT_ID), txb.object(compoundRequest), txb.object(depositRequest)],
    });
  }
  
}