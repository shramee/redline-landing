import {connect, disconnect, getStarknet} from "get-starknet";
import {useEffect, useState} from "react";

const defaultConnectedRender = ( {selectedAddress}, disconnectHandler ) => <>
	<h5 className='white' title={selectedAddress}>
		<span className="wallet">
			{selectedAddress.substring( 0, 4 ) + '...' + selectedAddress.substring( selectedAddress.length - 5 )}
		</span>
		&nbsp;&nbsp;
		<button onClick={disconnectHandler}>Disconnect</button>
	</h5>
</>;

const defaultDisconnectedRender = ( connectClickHandler ) => <>
	<button onClick={connectClickHandler}>Connect</button>
</>;

/**
 * Connects to a Starknet wallet
 * @param {function} onConnectedStatusChange
 * @param {function(wallet)} connectedRender
 * @param {function(connectClickHandler)} disconnectedRender
 * @returns {*}
 * @constructor
 */
const WalletConnect = ( {onConnectedStatusChange, connectedRender = defaultConnectedRender, disconnectedRender = defaultDisconnectedRender} ) => {
	const [connection, setConnection] = useState( {
		status: false,
		wallet: null
	} );

	const connectWallet = ( showListModal  ) => {
		connect( {showList: showListModal} ).then( wallet => {
			wallet
				?.enable( {showModal: showListModal} )
				.then( () => _onConnectedStatusChange( wallet ) );
		} );
	};

	const disconnectWallet = ( showListModal  ) => {
		disconnect( {clearLastWallet: true, clearDefaultWallet: true} );
		_onConnectedStatusChange( null )
	};

	const _onConnectedStatusChange = ( wallet ) => {
		onConnectedStatusChange && onConnectedStatusChange( !!wallet?.isConnected, wallet );
		setConnection( {status: !!wallet?.isConnected, wallet} );
	};

	// silently attempt to connect with a pre-authorized wallet
	useEffect( () => connectWallet( false ), [] );

	const connectClickHandler = () => connectWallet( true );
	const disconnectClickHandler = () => disconnectWallet( true );

	return connection.status ? connectedRender( connection.wallet, disconnectClickHandler ) : disconnectedRender( connectClickHandler );
};

export default WalletConnect;