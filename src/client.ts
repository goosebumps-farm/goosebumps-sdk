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

  cancelRequest(
    txb: TransactionBlock,
    currentAddress: string,
    nft: string,
  ): TransactionResult {
    /**
     * @description get CompoundRequest + DepositRequest
     * @param currentAddress Current Address of SuiClient instantiation
     * @param nft nft id
     * @returns TransactionResult
     */

    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bond::request_cancel`,
      typeArguments: [],
      arguments: [txb.object(nft)],
    });
  }

  withdrawFromTank(
    txb: TransactionBlock,
    currentAddress: string,
    vault: string,
    compoundRequest: string,
    depositRequest: string,
    bp: string,
    oracle: string,
    bktTreasury: string
  ): TransactionResult {
    /**
     * @description Withdraw from bucket tank
     * @param currentAddress Current Address of SuiClient instantiation
     * @param vault Vault ID
     * @param compoundRequest Compound request object
     * @param depositRequest Deposit request object
     * @param bp bucket
     * @param oracle oracle
     * @param bktTreasury Bkt Treasury
     * @returns TransactionResult
     */

    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bucket_tank::withdraw`,
      typeArguments: [],
      arguments: [txb.object(vault), txb.object(compoundRequest), txb.object(depositRequest), txb.object(bp), txb.object(oracle), txb.object(bktTreasury), txb.object(SUI_CLOCK_OBJECT_ID)],
    });
  }

  cancelBond(
    txb: TransactionBlock,
    currentAddress: string,
    compoundRequest: string,
    depositRequest: string,
    vault: string
  ){
    /**
     * @description Destroy CompoundRequest + DepositRequest and get Buck Coin
     * @param currentAddress Current Address of SuiClient instantiation
     * @param compoundRequest compoundRequest object id
     * @param depositRequest depositRequest object id
     * @param vault Vault id
     * @returns TransactionResult
    */  
 
  txb.setSenderIfNotSet(currentAddress);

  return txb.moveCall({
    target: `${PACKAGE_ID}::bond::cancel`,
    typeArguments: [],
    arguments: [txb.object(compoundRequest), txb.object(depositRequest), txb.object(vault)],
  });
  }

  requestCompound(
    txb: TransactionBlock,
    currentAddress: string,
  ){
    /**
     * @description Get CompoundRequest Object
     * @param txb TransactionBlock
     * @param currentAddress Current Address of SuiClient instantiation
     * @returns TransactionResult
    */  
 
    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bond::request_compound`,
      typeArguments: [],
      arguments: [],
    });
  }

  compoundToBucket(
    txb: TransactionBlock,
    currentAddress: string,
    vault: string,
    compoundRequest: string,
    bp: string,
    oracle: string,
    bktTreasury: string,
  ){
    /**
     * @description Compound To Bucket
     * @param txb TransactionBlock     
     * @param currentAddress Current Address of SuiClient instantiation
     * @param vault Vault ID
     * @param compoundRequest Compound Request object
     * @param bp bucket
     * @param oracle oracle
     * @param bktTreasury Bkt Treasury
     * @returns TransactionResult
    */  
 
     
    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bucket_tank::compound`,
      typeArguments: [],
      arguments: [txb.object(vault), txb.object(compoundRequest), txb.object(bp), txb.object(oracle), txb.object(bktTreasury), txb.object(SUI_CLOCK_OBJECT_ID)],
    });
  }

  approveBond(
    txb: TransactionBlock,
    currentAddress: string,
    nft: string,
    compoundRequest: string,
    vault: string,
    manager: string,

  ): TransactionResult{
    /**
     * @description approval of a bond - destroy compound request object and get GBUCK
     * @param txb TransactionBlock
     * @param currentAddress Current Address of SuiClient instantiation
     * @param nft nft id
     * @param compoundRequest Compound Request object
     * @param vault Vault ID
     * @param manager Manager Cap ID
     * @returns TransactionResult
    */  

    txb.setSenderIfNotSet(currentAddress);

    return txb.moveCall({
      target: `${PACKAGE_ID}::bond::approve`,
      typeArguments: [],
      arguments: [txb.object(nft), txb.object(compoundRequest), txb.object(vault), txb.object(manager), txb.object(SUI_CLOCK_OBJECT_ID)],
    });
 
  }


}