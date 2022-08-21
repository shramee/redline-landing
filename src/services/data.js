import {defaultSpacesInRace, raceContractAddress, robotsNFTsContractAddress} from "../conf";
import dummyRobotNFTs from './mock/NFTAssets';

export const
	getRobots = ( walletAddress ) => {
		const options = {method: 'GET', headers: {Accept: 'application/json'}};

		return new Promise( res => res( dummyRobotNFTs ) );

		return fetch( `https://api-testnet.aspect.co/api/v0/assets?contract_address=${robotsNFTsContractAddress}&owner_address=${walletAddress}&limit=50`, options )
			.then( response => response.json() )
			.then( response => response?.assets )
			.catch( err => console.error( err ) );
	};

export const callRaceContract = ( wallet, entrypoint, calldata ) =>
	wallet.provider.callContract( {contractAddress: raceContractAddress, entrypoint, calldata} );

export const getRobotsInRace = wallet =>
	callRaceContract( wallet, 'MakeRobotsArray' )
		.then( ( {result} ) => result.map( id => `${+ id}` ) );

export const getOpenRaceSlotsCount = wallet =>
	callRaceContract( wallet, 'getSignUpCount' )
		.then( ( {result} ) => {
			return defaultSpacesInRace - result[0];
		} );

export const submitRobotToRace = ( wallet, robotId ) =>
	callRaceContract( wallet, 'SubmitRobot', [robotId] )
		.then( response => response )
		.catch( e => {
			console.error( e )
		} );