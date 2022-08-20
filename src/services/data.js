import {robotsNFTsContractAddress} from "../conf";
import dummyRobotNFTs from './mock/NFTAssets';

export const
	getRobots = ( walletAddress ) => {
		const options = {method: 'GET', headers: {Accept: 'application/json'}};
//		return new Promise( res => res( dummyRobotNFTs ) );
		return fetch(`https://api-testnet.aspect.co/api/v0/assets?contract_address=${robotsNFTsContractAddress}&owner_address=${walletAddress}&limit=50`, options)
			.then(response => response.json())
			.then(response => response?.assets)
			.catch(err => console.error(err));
	};