import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
export declare class GooseClient {
    /**
     * @description Goose Bonds SDK.
     * @param client connection to fullnode
     * @param currentAddress (optional) address of the current user (default: DUMMY_ADDRESS)
     */
    private client;
    currentAddress: any;
    constructor(client: SuiClient, currentAddress: string);
    createRequest(txb: TransactionBlock, currentAddress: string, coin: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    depositToBucketTank(txb: TransactionBlock, currentAddress: string, vault: string, compoundRequest: string, depositRequest: string, bp: string, oracle: string, bktTreasury: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    createBond(txb: TransactionBlock, compoundRequest: string, depositRequest: string, currentAddress: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    cancelRequest(txb: TransactionBlock, currentAddress: string, nft: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    withdrawFromTank(txb: TransactionBlock, currentAddress: string, vault: string, compoundRequest: string, depositRequest: string, bp: string, oracle: string, bktTreasury: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    cancelBond(txb: TransactionBlock, currentAddress: string, compoundRequest: string, depositRequest: string, vault: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    requestCompound(txb: TransactionBlock, currentAddress: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    compoundToBucket(txb: TransactionBlock, currentAddress: string, vault: string, compoundRequest: string, bp: string, oracle: string, bktTreasury: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    approveBond(txb: TransactionBlock, currentAddress: string, nft: string, compoundRequest: string, vault: string, manager: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    requestRedeem(txb: TransactionBlock, currentAddress: string, coin: string, compoundRequest: string, vault: string, manager: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
    redeemGbuck(txb: TransactionBlock, currentAddress: string, compoundRequest: string, depositRequest: string, vault: string): ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    }) & ({
        kind: "Input";
        index: number;
        type?: "object" | "pure" | undefined;
        value?: any;
    } | {
        kind: "GasCoin";
    } | {
        kind: "Result";
        index: number;
    } | {
        kind: "NestedResult";
        index: number; /**
         * @description get CompoundRequest + DepositRequest
         * @param currentAddress Current Address of SuiClient instantiation
         * @param coin Coin Type
         * @return
         */
        resultIndex: number;
    })[];
}
//# sourceMappingURL=client.d.ts.map