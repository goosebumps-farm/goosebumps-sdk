import { TransactionBlock, TransactionArgument } from "@mysten/sui.js/transactions";
import { SuiClient } from '@mysten/sui.js/client';
import { PACKAGE, BUCKET_ORACLE_PACKAGE, POND, DUCK_MANAGER, BUCKET_PROTOCOL, BUCKET_ORACLE, BKT_TREASURY, SWITCHBOARD, SUPRA } from "./constants";
import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";

export class GooseClient {
	/**
	 * @description SDK to interact with GooseBumps package.
	 * @param client connection to fullnode
	 */

	private client: SuiClient;

	constructor(
	  client: SuiClient,
	) {
	  this.client = client;
	}
	bump(tx: TransactionBlock, buck: TransactionArgument, address: string): [TransactionBlock, TransactionArgument] {
		/**
	 	* @description Get egg by providing a buck object ID
	 	* @param tx TransactionBlock instance
		* @param buck buck object ID
		* @param address Sui address where the egg goes to
	 	*/
		const [comp_req, dep_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_bump`,
				arguments: [tx.object(buck as any)],
				typeArguments: [],
			});
			
			const [goose] = tx.moveCall({
				target: `${PACKAGE}::pond::bump`,
				arguments: [
					tx.object(POND),
					tx.object(SUI_CLOCK_OBJECT_ID),
					comp_req,
					dep_req,
				],
				typeArguments: [],
			});
		tx.transferObjects([goose], address as any);
		return [tx, goose];
	}

	dump(tx: TransactionBlock, nft: TransactionArgument, address: string): [TransactionBlock, TransactionArgument] {
		/**
	 	* @description Get dumped goose by providing NFT object ID
	 	* @param tx TransactionBlock instance
		* @param nft Goose NFT object ID that has to be dumped.
		* @param address Sui address where the dumped NFT goose goes to
	 	*/
		const [comp_req, wit_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_dump`,
				arguments: [tx.object(nft as any)],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${BUCKET_ORACLE_PACKAGE}::bucket_oracle::update_price`,
				arguments: [
					tx.object(BUCKET_ORACLE),
					tx.object(SUI_CLOCK_OBJECT_ID),
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
					tx.object(SUI_CLOCK_OBJECT_ID),
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
		tx.transferObjects([buck], address as any);
		return [tx, buck];
	}

	pump(tx: TransactionBlock, nft: TransactionArgument, address: string): [TransactionBlock, TransactionArgument] {
		/**
	 	* @description Get pumped goose by providing NFT object ID
	 	* @param tx TransactionBlock instance
		* @param nft Goose NFT object ID that has to be pumped.
		* @param address Sui address where the pumped NFT goose goes to
	 	*/
		const [comp_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_compound`,
				arguments: [],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${BUCKET_ORACLE_PACKAGE}::bucket_oracle::update_price`,
				arguments: [
					tx.object(BUCKET_ORACLE),
					tx.object(SUI_CLOCK_OBJECT_ID),
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
					tx.object(SUI_CLOCK_OBJECT_ID),
				],
				typeArguments: [],
			});
			
			const [duck] = tx.moveCall({
				target: `${PACKAGE}::pond::pump`,
				arguments: [
			tx.object(nft as any),
			comp_req,
					tx.object(POND),
					tx.object(DUCK_MANAGER),
					tx.object(SUI_CLOCK_OBJECT_ID),
				],
				typeArguments: [],
			});
		tx.transferObjects([duck], address as any);
		return [tx, duck];
	}

	redeem(tx: TransactionBlock, duck: TransactionArgument, address: string): [TransactionBlock, TransactionArgument] {
		/**
	 	* @description Redeem the initial deposited BUCK
	 	* @param tx TransactionBlock instance
		* @param nft duck object ID that has to be redeemed
		* @param address Sui address where buck coins go to
	 	*/
		const [req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_compound`,
				arguments: [],
				typeArguments: [],
			});
			
			tx.moveCall({
				target: `${BUCKET_ORACLE_PACKAGE}::bucket_oracle::update_price`,
				arguments: [
					tx.object(BUCKET_ORACLE),
					tx.object(SUI_CLOCK_OBJECT_ID),
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
					tx.object(SUI_CLOCK_OBJECT_ID),
				],
				typeArguments: [],
			});
			
			const [comp_req, wit_req] = tx.moveCall({
				target: `${PACKAGE}::pond::request_redeem`,
				arguments: [
			tx.object(duck as any),
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
					tx.object(SUI_CLOCK_OBJECT_ID),
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
		tx.transferObjects([buck], address as any);
		return [tx, buck];
	}

}
