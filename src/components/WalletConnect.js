import {connect, getStarknet} from "get-starknet";
import {useEffect, useState} from "react";

/**
 * Connects to a Starknet wallet
 * @param {function} onConnectedStatusChange
 * @param {function(wallet)} connectedRender
 * @param {function(connectClickHandler)} disconnectedRender
 * @returns {*}
 * @constructor
 */
const WalletConnect = ( {onConnectedStatusChange, connectedRender, disconnectedRender} ) => {
	const [isConnected, setIsConnected] = useState( false );
	const [wallet, setWallet] = useState( null );

	const _onConnectedStatusChange = (
		( status, wallet ) => {
			onConnectedStatusChange && onConnectedStatusChange( status, wallet );
			setIsConnected( status );
			setWallet( wallet )
		}
	);

	connectedRender = connectedRender || (
		({selectedAddress}) => {
			return <h5 className='white' title={selectedAddress}>
				{selectedAddress.substring( 0, 4 ) + '...' + selectedAddress.substring( selectedAddress.length - 5 )}
			</h5>
		}
	);

	disconnectedRender = disconnectedRender || (
		(connectClickHandler) => {
			return <button onClick={connectClickHandler}>Connect</button>
		}
	);


	// silently attempt to connect with a pre-authorized wallet
	useEffect( () => {
		connect( {showList: false} ).then( wallet => {
			wallet
				?.enable( {showModal: false} )
				.then( () => _onConnectedStatusChange( !!wallet?.isConnected, wallet ) );
		} );
	}, [] );

	const connectClickHandler = () => {
		connect( {showList: true} ).then( wallet => {
			wallet
				?.enable( {showModal: true} )
				.then( () => _onConnectedStatusChange( !!wallet?.isConnected ) );
		} );
	}

	return isConnected ? connectedRender( wallet ) : disconnectedRender( connectClickHandler );
};

export default WalletConnect;