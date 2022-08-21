import {raceTrackImageURI, raceContractAddress, defaultSpacesInRace} from '../../conf';

const Robot = ( {robot, robotInRace, submitToRace} ) => {
	const {name, token_id, token_uri, contract_address, image_uri, attributes} = robot;
	const optimisedImage = `https://redline.game/a/birme-256xauto/${image_uri.split( '/' ).at( - 1 ).split( '.' )[0]}.webp`;

	return <div className='w5 ma2 pa1 flex-shrink-0 flex robot'>
		<div key='sec0' className="w-50 pr2">
			<img src={optimisedImage} alt={name} className="db br1"/>
			{robotInRace ?
				<button disabled
								className="b b--solid ba bg-black br1 mt2 pa1 ttu w-100 b--inherit" style={{color: '#e00'}}>
					Racing
				</button> :
				<button onClick={e => submitToRace( token_id )}
								className="pointer glow o-80 b b--solid b--white ba bg-black br1 mt2 pa1 ttu w-100 white">
					Submit
				</button>}
		</div>
		<div key='sec1' className="w-50 pl1">
			<h5 className='ma0 mb2'>{name}</h5>
			<dl className="stats ma0 pt1">
				{attributes.map( ( {trait_type, value}, i ) => {
					return <>
						<dt key={'dt' + i} className="f7 tracked-tight ttu ml0 fl">{trait_type}</dt>
						<dd key={'dd' + i} className="f6 b ml0 tr mb1">{value}</dd>
					</>;
				} )}
			</dl>
		</div>
	</div>;
}

export default Robot;