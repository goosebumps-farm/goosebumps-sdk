import { SuiClient } from "@mysten/sui.js/client";



export class BucketClient {
  /**
   * @description Goose Bonds SDK.
   * @param client connection to fullnode
   * @param currentAddress (optional) address of the current user (default: DUMMY_ADDRESS)
   */

  private client: SuiClient;
  
  constructor(
    client: SuiClient,

  ) {
    this.client = client;
  }
}