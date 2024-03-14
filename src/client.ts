// import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { TransactionBlock, TransactionArgument } from "@mysten/sui.js/transactions";
import { PACKAGE, BUCKET_ORACLE_PACKAGE, POND, DUCK_MANAGER, BUCKET_PROTOCOL, BUCKET_ORACLE, BKT_TREASURY, SWITCHBOARD, SUPRA, CLOCK } from "./constants";

export class GooseClient {
	/**
	 * @description SDK to interact with GooseBumps package.
	 * @param client connection to fullnode
	 */

	// private client: SuiClient;

	// constructor(
	//   public network: string,
	// ) {
	//   let url = "";

	//   if (network == 'mainnet'
	//     || network == 'testnet'
	//     || network == 'devnet'
	//     || network == 'localnet') {
	//     url = getFullnodeUrl(network);
	//   }
	//   else {
	//     url = network as string;
	//   }

	//   this.client = new SuiClient({ url });
	// }
	
	bump(tx: TransactionBlock, buck: TransactionArgument): [TransactionBlock, TransactionArgument] {
		const [comp_req, dep_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_bump`,
				arguments: [buck],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${BUCKET_ORACLE_PACKAGE}::bucket_oracle::update_price`,
				arguments: [
					tx.object(BUCKET_ORACLE),
					tx.object(CLOCK),
					tx.object(SWITCHBOARD),
					tx.object(SUPRA),
					tx.pure(90), // pair id
				],
				typeArguments: [
					"0x2::sui::SUI"
				],
			});
			
			tx.moveCall({
				target: `${PACKAGE}::bucket_tank::deposit`,
				arguments: [
					tx.object(POND),
					comp_req,
					dep_req,
					tx.object(BUCKET_PROTOCOL),
					tx.object(BUCKET_ORACLE),
					tx.object(BKT_TREASURY),
					tx.object(CLOCK),
				],
				typeArguments: [],
			});
			
			const [goose] = tx.moveCall({
				target: `${PACKAGE}::pond::bump`,
				arguments: [
					tx.object(CLOCK),
					comp_req,
					dep_req,
					tx.object(POND),
				],
				typeArguments: [],
			});

		return [tx, goose];
	}

	dump(tx: TransactionBlock, nft: TransactionArgument): [TransactionBlock, TransactionArgument] {
		const [comp_req, wit_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_dump`,
				arguments: [nft],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${BUCKET_ORACLE_PACKAGE}::bucket_oracle::update_price`,
				arguments: [
					tx.object(BUCKET_ORACLE),
					tx.object(CLOCK),
					tx.object(SWITCHBOARD),
					tx.object(SUPRA),
					tx.pure(90),
				],
				typeArguments: [
					"0x2::sui::SUI"
				],
			});
			
			tx.moveCall({
				target: `${PACKAGE}::bucket_tank::withdraw`,
				arguments: [
					tx.object(POND),
					comp_req,
					wit_req,
					tx.object(BUCKET_PROTOCOL), // protocol
					tx.object(BUCKET_ORACLE), // oracle
					tx.object(BKT_TREASURY), // treasury
					tx.object(CLOCK),
				],
				typeArguments: [],
			});
			
			const [buck] = tx.moveCall({
				target: `${PACKAGE}::pond::dump`,
				arguments: [
					comp_req,
					wit_req,
					tx.object(POND),
				],
				typeArguments: [],
			});

		return [tx, buck];
	}

	pump(tx: TransactionBlock, nft: TransactionArgument): [TransactionBlock, TransactionArgument] {
		const [comp_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_compound`,
				arguments: [],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${BUCKET_ORACLE_PACKAGE}::bucket_oracle::update_price`,
				arguments: [
					tx.object(BUCKET_ORACLE),
					tx.object(CLOCK),
					tx.object(SWITCHBOARD),
					tx.object(SUPRA),
					tx.pure(90),
				],
				typeArguments: [
					"0x2::sui::SUI"
				],
			});
			
			tx.moveCall({
				target: `${PACKAGE}::bucket_tank::compound`,
				arguments: [
					tx.object(POND),
					comp_req,
					tx.object(BUCKET_PROTOCOL), // protocol
					tx.object(BUCKET_ORACLE), // oracle
					tx.object(BKT_TREASURY), // treasury
					tx.object(CLOCK),
				],
				typeArguments: [],
			});
			
			const [duck] = tx.moveCall({
				target: `${PACKAGE}::pond::pump`,
				arguments: [
			nft,
			comp_req,
					tx.object(POND),
					tx.object(DUCK_MANAGER),
					tx.object(CLOCK),
				],
				typeArguments: [],
			});

		return [tx, duck];
	}

	redeem(tx: TransactionBlock, duck: TransactionArgument): [TransactionBlock, TransactionArgument] {
		const [req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_compound`,
				arguments: [],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${BUCKET_ORACLE_PACKAGE}::bucket_oracle::update_price`,
				arguments: [
					tx.object(BUCKET_ORACLE),
					tx.object(CLOCK),
					tx.object(SWITCHBOARD),
					tx.object(SUPRA),
					tx.pure(90),
				],
				typeArguments: [
					"0x2::sui::SUI"
				],
			});
			
			tx.moveCall({
				target: `${PACKAGE}::bucket_tank::compound`,
				arguments: [
					tx.object(POND),
					req,
					tx.object(BUCKET_PROTOCOL), // protocol
					tx.object(BUCKET_ORACLE), // oracle
					tx.object(BKT_TREASURY), // treasury
					tx.object(CLOCK),
				],
				typeArguments: [],
			});
			
			const [comp_req, wit_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_redeem`,
				arguments: [
			duck,
			req,
					tx.object(POND),
					tx.object(DUCK_MANAGER),
				],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${PACKAGE}::bucket_tank::withdraw`,
				arguments: [
					tx.object(POND),
					comp_req,
					wit_req,
					tx.object(BUCKET_PROTOCOL), // protocol
					tx.object(BUCKET_ORACLE), // oracle
					tx.object(BKT_TREASURY), // treasury
					tx.object(CLOCK),
				],
				typeArguments: [],
			});
			
			const [buck] = tx.moveCall({
				target: `${PACKAGE}::pond::redeem`,
				arguments: [
					comp_req,
					wit_req,
					tx.object(POND),
				],
				typeArguments: [],
			});

		return [tx, buck];
	}

}