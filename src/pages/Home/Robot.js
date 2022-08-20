const Robot = ( {robot} ) => {
	const {name, token_uri, contract_address, image_uri, attributes} = robot;

	const submitToRace = () => {
		alert( 'Submitting ' + name + ' to race.' );
	};

	return <div className='w5 ma2 pa1 flex-shrink-0 flex robot'>
		<div className="w-50 pr2">
			<img src={image_uri} alt={name} className="db br1"/>
			<button onClick={submitToRace}
							className="glow o-80 b b--solid b--white ba bg-black br1 mt2 pa1 ttu w-100 white">
				Submit
			</button>
		</div>
		<div className="w-50 pl1">
			<h5 className='ma0 mb2'>{name}</h5>
			<dl className="stats ma0">
				{attributes.map( ( {trait_type, value} ) => {
					return <>
						<dd className="f7 tracked-tight ttu ml0 fl">{trait_type}</dd>
						<dd className="f6 b ml0 tr mb1">{value}</dd>
					</>;
				} )}
			</dl>
		</div>
	</div>;
}

export default Robot;