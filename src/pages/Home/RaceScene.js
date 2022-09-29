import Scene from "../../components/Scene";
import {Component} from "react";
import {twitchURL} from "../../conf";
import ScrollAndMouse from "../../services/scrollAndMouse";
import moment from 'moment';
import livestreamScreenShot from '../../assets/live-stream-screenshot.png';

const snm = window.snm || new ScrollAndMouse();

export default class RaceScene extends Component {
	stagger( el ) {
		if ( el ) {
			this.staggerEl = el; // Cache stagger el
		}
		snm.staggerChildren( this.staggerEl, .1, .3 );
	}

	tracks = [
		{
			trackId    : 'bora-bora',
			name       : 'Bora Bora',
			countryCode: 'pf',
			coords     : '16°30′04″S 151°44′24″W',
			cellCount  : '151',
			cellLength : '100',
		},
		{
			trackId    : 'namib',
			name       : 'Namib Seaside',
			countryCode: 'na',
			coords     : '?',
			cellCount  : '151',
			cellLength : '100',
		},
		{
			trackId    : 'yukon-peaks',
			name       : 'Yukon Peaks',
			countryCode: 'ca',
			coords     : '?',
			cellCount  : '151',
			cellLength : '100',
		}
	];

	state = {};

	componentDidMount() {

		this.getRaces();
	}

	async getTracks() {
		const _tracks = this.tracks;
		const tracks = {};

		_tracks.forEach( trk => tracks[trk.trackId] = trk );

		this.setState( {tracks} );

		return tracks;
	}

	async getRaces() {
		const tracks = await this.getTracks();

		const races = [
			{
				raceId  : '23hjg37624sdawe',
				trackId : 'bora-bora',
				type    : 'regular',
				time    : new Date( Date.now() ),
				entryFee: '0.25',
				prize   : {
					ether  : '0.02',
					tickets: 1
				},
			},
			{
				raceId  : '23hjg37624sdawe',
				trackId : 'namib',
				type    : 'regular',
				time    : new Date( Date.now() + 800000 ),
				entryFee: '0.25',
				prize   : {
					ether  : '0.02',
					tickets: 1
				},
			},
			{
				raceId  : '23hjg37624sdawe',
				trackId : 'yukon-peaks',
				type    : 'regular',
				time    : new Date( Date.now() + 1500000 ),
				entryFee: '0.25',
				prize   : {
					ether  : '0.02',
					tickets: 1
				},
			},
			{
				raceId  : '23hjg37624sdawe',
				trackId : 'namib',
				type    : 'regular',
				time    : new Date( Date.now() + 2500000 ),
				entryFee: '0.25',
				prize   : {
					ether  : '0.02',
					tickets: 1
				},
			},
		];

		races.forEach( race => {
			race.track = tracks[race.trackId];
		} );

		this.setState( {races} );
	}

	getTrackImage( {trackId} ) {
		return `//redline-dao.github.io/data/tracks/images/${trackId}.jpeg`;
	}

	getTrackCountryImage( {countryCode} ) {
		return `//redline-dao.github.io/data/flags/w80/${countryCode}.png`;
	}

	render() {
		const {races, tracks} = this.state;
		return <Scene id='races' className='bg-chart'>
			{/*{subHeading( {marginBottom: '-.4em'} )}*/}
			<div className="w-100 w-80-l mw9">
				<div className='relative z-1 mt5'>
					<h2 ref={el => snm.addScrollTarget( el )} className='scene-title anims heading-anim'>
						<span className="live-blink clr v-mid" style={{marginRight: '.3em', fontSize: '1.4em',}}>&bull;</span>
						Live now
					</h2>
					<div
						className="aspect-ratio aspect-ratio--16x9 br2 overflow-hidden race-live-stream">
						{/*<img className='aspect-ratio--object' src={livestreamScreenShot} alt=""/>*/}
						<iframe className="aspect-ratio--object cover" frameBorder="0" allowFullScreen scrolling="no"
										title='Live twitch feed' height="450" width="800" src={twitchURL}/>
					</div>
				</div>
				<div className='relative z-1 mt5'>
					<a href="//alpha.redline.game" className="btn fr">All races</a>
					<h2 ref={el => snm.addScrollTarget( el )}
							className='dib scene-title text-bg anims heading-anim'
					>
						Upcoming Races
					</h2>

					<div className="races-wrap flex flex-wrap items-center mv3 nl3 nr3" ref={el => {
						this.stagger( el );
						snm.addScrollTarget( el )
					}}>
						{races && races.map( (race, i) => {
							if ( !race || !race.track ) {
								return null;
							}
							const img = this.getTrackImage( race.track );
							return <div key={i} className='w-50 w-33-m w-25-l o-70 anims fadeInUp'>
								<div className="ma3 race pa2 bg br2">
									<h3 style={{fontSize: '1.2rem'}} className='mb1 lh-solid ma1'>
										<img className='v-mid w2 mr2 br1' src={this.getTrackCountryImage( race.track )}/>
										{race.track.name}
									</h3>
									<small className="fl ma1">{moment( race.time ).fromNow()}</small>
									<small className="ma1 br3 lh-copy fr">
										<svg className='w1 v-mid mr1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path fill='currentColor'
														d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
										</svg>
										<span style={{letterSpacing: '1px'}}>ETH</span>&nbsp;{race.prize.ether}</small>
									<div className='cb br1 aspect-ratio--16x9 race-track-image dotted-overlay-after'
											 style={{background: `center/cover url(${img})`}}>
										<a href="//alpha.redline.game" className="btn nt4 absolute-btn ma-auto tracked">Join race</a>
									</div>
								</div>
							</div>
						} )}
					</div>
					{/*<div className="races-wrap flex flex-wrap items-center mv3 nl3 nr3">

					{races && races.map( ( race, i ) => {
						if ( !race || !race.track || i > 3 ) {
							return null;
						}
						const img = this.getTrackImage( race.track );
						return <div className='w-50 w-33-m w-25-l'>
							<div className="ma3 race ba br2 b--white-30 pa3">

								<h3 style={{fontSize: '1.2rem'}} className='ma0 mb1 lh-solid'>
									<img className='v-mid h2 mr2 br1 nb3' src={this.getTrackCountryImage( race.track )}/>
									{race.track.name}
								</h3>
								<div className='cb br2 aspect-ratio--16x9 mt0 nl3 nr3 nb3'
										 style={{background: `center/cover url(${img})`}}>
								</div>
								<img src={this.getTrackImage( race.track )}/>
								<div style={{height: 0}}>
									<p className="ma0 bg br3 ph2 lh-copy fl">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='h1 pr2 v-mid'>
											<path fill='currentcolor'
														d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
										</svg>
										{race.prize.ether}</p>
									<p className="ma0 bg br3 ph2 lh-copy fr">{moment( race.time ).fromNow()}</p>
								</div>
							</div>
						</div>
					} )}

				</div>*/}


					{/*
				<div className="races-wrap flex flex-wrap items-center mv3 nl3 nr3">
					{races && races.map( race => {
						if ( !race || !race.track ) {
							return null;
						}
						const img = this.getTrackImage( race.track );
						return <div className='w-50 w-33-m w-25-l o-70'>
							<div className="ma3 race br1 bg2" style={{
								border: '2px solid var( --bg )'
//								background: 'linear-gradient(-80deg, rgb(2, 9, 24) 0%, rgb(36 56 96) 66%, rgb(9 29 71) 100%)'
							}}>
								<h3 style={{fontSize: '1.2rem'}} className='lh-solid ma0 pa1 ph2 bg'>
									{race.track.name}
								</h3>
								<p className="fl ma1 mh2">{moment( race.time ).fromNow()}</p>
								<p className="ma1 mh2 br3 lh-copy fr" style={{letterSpacing: '1px'}}>
									<svg className='w1 v-mid mr1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
										<path fill='currentColor' d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
									</svg>
									ETH&nbsp;{race.prize.ether}</p>
								<div className='w-80 ma2 mb3 mt4 cb'>
									<img className='v-mid h1 br1 mb2' src={this.getTrackCountryImage( race.track )}/>
									<div className='cb br1 aspect-ratio--16x9' style={{background: `center/cover url(${img})`}}>
									</div>
								</div>
							</div>
						</div>
					} )}
				</div>
*/}

				</div>
			</div>
		</Scene>;
	}
}