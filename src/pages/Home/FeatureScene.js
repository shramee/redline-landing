import {Component} from "react";
import Scene from "../../components/Scene";
import HugeBgText from '../../components/HugeBgText';
import ScrollAndMouse from "../../services/scrollAndMouse";
import TwoColumnLayout from '../../components/TwoColumnLayout';
import weatherVideo from '../../assets/features/weather.webm';
import weatherVideoMP4 from '../../assets/features/weather.mp4';
import aroundTheWorldImg from '../../assets/features/around-the-world.webp';
import robotsImg from '../../assets/features/robots.webp';
import prizesImg from '../../assets/features/prizes.webp';
import updateTuneImg from '../../assets/features/upgrade-tune.webp';

const snm = window.snm || new ScrollAndMouse();

export default class FeatureScene extends Component {
	stagger( el ) {
		if ( el ) {
			this.staggerEl = el; // Cache stagger el
		}
		snm.staggerChildren( this.staggerEl, .5, .5 );
	}

	render() {
		return <Scene id='features' className='overflow-hidden bg-chart'>
			<div className="w-100 w-80-l mw9">
				<TwoColumnLayout
					visual={
						<img src={robotsImg} alt='Robots: Kaisoku' className='nb6'
								 style={{transform: 'translate(calc(-35% + 50% * var(--scroll)),calc(20% + -50% * var(--scroll))) scale(0.7,0.7)'}}/>
					}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Kaisoku
						</h2>
						<p className='measure lh-copy'>
							Kaisokus are racing robots inspired by living organisms and perfected by high tech engineering. They are
							self driving and usually composed of 11 parts.
						</p>
						<p className='measure lh-copy'>
							Kaisokus are the fastest mechas in the world, owing to material engineering breakthroughs and feirce
							competition to push
							the limits.
						</p>
					</>}
				/>

				<div className="pv5"></div>

				<TwoColumnLayout
					flip={true}
					visual={<div className='frame fadeInUp anim-d'>
						<img src={aroundTheWorldImg} alt='Race around the world'/></div>}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Race around the world
						</h2>
						<p className='measure lh-copy'>
							Redline is a global race. Racetracks can be found all around the world, with new ones continuously added
							and old ones updated. The tracks are NFTs and are 15km long on average.
						</p>
					</>}
				/>

				<div className="pv5"></div>

				<TwoColumnLayout
					visual={<div className='frame fadeInUp anim-d'>
						<img className='o-80' src={updateTuneImg} alt='Race around the world'/>
					</div>}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Upgrade, tune and win
						</h2>
						<p className='measure lh-copy'>
							Get under the hood to tune your acceleration, hoofs, engine and much more. And when the competition gets
							ruthless you can risk sacrificing safety for speed. Bring a unique look and feel to your Kaisoku
							with endless skin combinations.
						</p>
					</>}
				/>

				<div className="pv5"></div>

				<TwoColumnLayout
					flip={true}
					visual={<div className='frame fadeInUp anim-d'>
							<img src={prizesImg} alt='Race around the world'/></div>}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Prizes
						</h2>
						<p className='measure lh-copy'>
							When you win Redline races you get new rare robot parts and skins.
							More challenging tournaments include cash prizes, trustlessly paid out in Ether or DAI by the smart
							contract.
						</p>
					</>}
				/>

				<div className="pv5"></div>

				<TwoColumnLayout
					visual={<div className='frame fadeInUp anim-d'>
						<video muted autoPlay loop playsInline>
							<source src={weatherVideo} type="video/webm" />
							<source src={weatherVideoMP4} type="video/mp4" />
						</video>
					</div>}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Unpredictable weather
						</h2>
						<p className='measure lh-copy'>
							An unusual phenomenon makes the weather shared between the two timelines.
							When it rains where you are, it rains there in the XX branch too. The racetracks and Kaisoku are affected
							by the weather, so make sure to
							check the forecast before a race.
						</p>
					</>}
				/>
			</div>
		</Scene>
	}
}