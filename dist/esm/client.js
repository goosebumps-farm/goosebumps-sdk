import { SUI_CLOCK_OBJECT_ID } from '@mysten/sui.js/utils';
const PACKAGE_ID = "";
export class GooseClient {
    /**
     * @description Goose Bonds SDK.
     * @param client connection to fullnode
     * @param currentAddress (optional) address of the current user (default: DUMMY_ADDRESS)
     */
    client;
    currentAddress;
    constructor(client, currentAddress) {
        this.client = client;
        this.currentAddress = currentAddress;
    }
    createRequest(txb, currentAddress, coin) {
        /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::request_create`,
            typeArguments: [coin],
            arguments: [],
        });
    }
    depositToBucketTank(txb, currentAddress, vault, compoundRequest, depositRequest, bp, oracle, bktTreasury) {
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
         * @return
         */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bucket_tank::deposit`,
            typeArguments: [],
            arguments: [txb.object(vault), txb.object(compoundRequest), txb.object(depositRequest), txb.object(bp), txb.object(oracle), txb.object(bktTreasury), txb.object(SUI_CLOCK_OBJECT_ID)],
        });
    }
    createBond(txb, compoundRequest, depositRequest, currentAddress) {
        /**
         * @description destroy CompoundRequest + DepositRequest and receive NFT
         * @param compoundRequest CompoundRequest object
         * @param depositRequest DepositRequest object
         * @return
         */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::create`,
            typeArguments: [],
            arguments: [txb.object(SUI_CLOCK_OBJECT_ID), txb.object(compoundRequest), txb.object(depositRequest)],
        });
    }
    cancelRequest(txb, currentAddress, nft) {
        /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param nft nft id
         * @return
         */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::request_cancel`,
            typeArguments: [],
            arguments: [txb.object(nft)],
        });
    }
    withdrawFromTank(txb, currentAddress, vault, compoundRequest, depositRequest, bp, oracle, bktTreasury) {
        /**
         * @description Withdraw from bucket tank
         * @param currentAddress Current Address of SuiClient instantiation
         * @param vault Vault ID
         * @param compoundRequest Compound request object
         * @param depositRequest Deposit request object
         * @param bp bucket
         * @param oracle oracle
         * @param bktTreasury Bkt Treasury
         * @return
         */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bucket_tank::withdraw`,
            typeArguments: [],
            arguments: [txb.object(vault), txb.object(compoundRequest), txb.object(depositRequest), txb.object(bp), txb.object(oracle), txb.object(bktTreasury), txb.object(SUI_CLOCK_OBJECT_ID)],
        });
    }
    cancelBond(txb, currentAddress, compoundRequest, depositRequest, vault) {
        /**
         * @description Destroy CompoundRequest + DepositRequest and get Buck Coin
         * @param currentAddress Current Address of SuiClient instantiation
         * @param compoundRequest compoundRequest object id
         * @param depositRequest depositRequest object id
         * @param vault Vault id
         * @return
        */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::cancel`,
            typeArguments: [],
            arguments: [txb.object(compoundRequest), txb.object(depositRequest), txb.object(vault)],
        });
    }
    requestCompound(txb, currentAddress) {
        /**
         * @description Get CompoundRequest Object
         * @param txb TransactionBlock
         * @param currentAddress Current Address of SuiClient instantiation
         * @return
        */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::request_compound`,
            typeArguments: [],
            arguments: [],
        });
    }
    compoundToBucket(txb, currentAddress, vault, compoundRequest, bp, oracle, bktTreasury) {
        /**
         * @description Compound To Bucket
         * @param txb TransactionBlock
         * @param currentAddress Current Address of SuiClient instantiation
         * @param vault Vault ID
         * @param compoundRequest Compound Request object
         * @param bp bucket
         * @param oracle oracle
         * @param bktTreasury Bkt Treasury
         * @return
        */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bucket_tank::compound`,
            typeArguments: [],
            arguments: [txb.object(vault), txb.object(compoundRequest), txb.object(bp), txb.object(oracle), txb.object(bktTreasury), txb.object(SUI_CLOCK_OBJECT_ID)],
        });
    }
    approveBond(txb, currentAddress, nft, compoundRequest, vault, manager) {
        /**
         * @description approval of a bond - destroy compound request object and get GBUCK
         * @param txb TransactionBlock
         * @param currentAddress Current Address of SuiClient instantiation
         * @param nft nft id
         * @param compoundRequest Compound Request object
         * @param vault Vault ID
         * @param manager Manager Cap ID
         * @return
        */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::approve`,
            typeArguments: [],
            arguments: [txb.object(nft), txb.object(compoundRequest), txb.object(vault), txb.object(manager), txb.object(SUI_CLOCK_OBJECT_ID)],
        });
    }
    requestRedeem(txb, currentAddress, coin, compoundRequest, vault, manager) {
        /**
         * @description Destroy CompoundRequest and get second CompoundRequest, WithdrawRequest and GBUCK
         * @param txb TransactionBlock,
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @param compoundRequest Compound request Object ID
         * @param vault Vault ID
         * @param manager Manager ID
         * @return
        */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::request_redeem`,
            typeArguments: [coin],
            arguments: [txb.object(compoundRequest), txb.object(vault), txb.object(manager)],
        });
    }
    redeemGbuck(txb, currentAddress, compoundRequest, depositRequest, vault) {
        /**
         * @description Withdraw BUCK
         * @param txb TransactionBlock
         * @param currentAddress Current Address of SuiClient instantiation
         * @param compoundRequest Compound Request Object ID
         * @param depositRequest Deposit Request Object ID
         * @param vault Vault ID
         * @return
        */
        txb.setSenderIfNotSet(currentAddress);
        return txb.moveCall({
            target: `${PACKAGE_ID}::bond::redeem`,
            typeArguments: [],
            arguments: [txb.object(compoundRequest), txb.object(depositRequest), txb.object(vault)],
        });
    }
}
//# sourceMappingURL=client.js.map