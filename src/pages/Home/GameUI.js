import {useEffect, useState} from "react";
import {getRobots} from '../../services/data';
import Robot from './Robot';

const GameUI = ({wallet}) => {
	const [ robotNFTs, setRobotNFT ] = useState( [] );
	const {selectedAddress} = wallet;

	useEffect( () => {
		getRobots( selectedAddress )
			.then(
				robots =>
					setRobotNFT( robots )
			);
	}, [selectedAddress] );

	return <>
		<h3>Your robots</h3>
		<div className="robots flex overflow-auto pa2 b--white-10 ba">
			{robotNFTs.map( robot => <Robot robot={robot} /> )}
		</div>
		<h3>Race track</h3>
		<img src="" alt=""/>
	</>
};
export default GameUI;