import {Component} from "react";
import Scene from "../../components/Scene";
import HugeBgText from '../../components/HugeBgText';
import ScrollAndMouse from "../../services/scrollAndMouse";
import TwoColumnLayout from '../../components/TwoColumnLayout';
import weatherVideo from '../../assets/features/weather.mp4';
import aroundTheWorldImg from '../../assets/features/around-the-world.jpeg';
import robotsImg from '../../assets/features/robots.png';
import prizesImg from '../../assets/features/prizes.jpeg';
import updateTuneImg from '../../assets/features/upgrade-tune.png';

const snm = window.snm || new ScrollAndMouse();

export default class FeatureScene extends Component {
	stagger( el ) {
		if ( el ) {
			this.staggerEl = el; // Cache stagger el
		}
		snm.staggerChildren( this.staggerEl, .5, .5 );
	}

	render() {
		return <Scene id='features' className='overflow-hidden bg-chart' style={{
			background: 'linear-gradient(-80deg, rgb(2, 9, 24) 0%, rgb(28, 45, 77) 66%, rgb(9, 29, 71) 100%)',
		}}>
			<div className="w-100 w-80-l mw9">
				<TwoColumnLayout
					visual={
						<img src={robotsImg} alt='Robots: Kaisoku' className='nb6'
								 style={{transform: 'translate(calc(-35% + 50% * var(--scroll)),calc(20% + -50% * var(--scroll))) scale(0.7,0.7)'}}/>
					}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Robots: Kaisoku
						</h2>
						<p className='measure lh-copy'>
							Kaisokus are racing robots inspired by living organisms and perfected by high tech engineering. They are
							self driving and usually composed of 11 parts. There are regulation govening the builds. They are the
							fastest mechas in the world, owing to material engineering breakthroughs and feirce competition to push
							the limits.
						</p>
					</>}
				/>

				<TwoColumnLayout
					flip={true}
					visual={
						<img className='br3' src={aroundTheWorldImg} alt='Race around the world'
								 style={{
									 transformOrigin: '100% 0',
									 opacity: 'calc(1 - var(--scroll-low))',
									 transform: 'scale(calc(1 - var(--scroll-low))) rotate(calc(-120deg * var(--scroll-low)))',
//									 transform      : 'scale(calc(1 - var(--scroll-low))) rotate(calc(120deg * var(--scroll-low)))'
								 }}
						/>}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Race around the world
						</h2>
						<p className='measure lh-copy'>
							Redline is a global race. Redline racetracks can be found all around the world, with new ones being built
							and old ones updated. The tracks are NFTs.
						</p>
					</>}
				/>

				<TwoColumnLayout
					visual={<div className='bg-black-30 br3' style={{
						opacity: 'calc(1 - var(--scroll-low))',
						transform: 'scale(calc(1 - var(--scroll-low)))'
					}}>
						<img className='db br3' src={updateTuneImg} alt='Race around the world'/>
					</div>}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Upgrade, tune and win
						</h2>
						<p className='measure lh-copy'>
							Get under the hood to tune your acceleration, hoofs, engine and much more. And when the competition gets
							ruthless you can risk sacrifying safety for speed. Become a legend by using a unique look for your Kaisoku
							with the endless skin cominations.
						</p>
					</>}
				/>

				<TwoColumnLayout
					flip={true}
					visual={<img className='db br3' src={prizesImg} alt='Race around the world' style={{
						opacity: 'calc(1 - var(--scroll-low))',
						transform: 'scale(calc(1 - var(--scroll-low)))'
					}}/>}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Prizes
						</h2>
						<p className='measure lh-copy'>
							When you win Redline races you can get rewards like new rare robot parts, new robot skins but also cash
							prizes for the most challenging tournaments.
						</p>
					</>}
				/>

				<TwoColumnLayout
					videoUrl={weatherVideo}
					visualStyle={{opacity: 'calc(1 - var(--scroll-low))', transform: 'scale(calc(1 - var(--scroll-low)))'}}
					content={<>
						<h2 ref={el => snm.addScrollTarget( el )} className="scene-title mb4">
							Unpredictable weather
						</h2>
						<p className='measure lh-copy'>
							An unusual phenomenon makes the weather shared between both timelines. When it rains where you are, it
							rains there in the XX branch too. The racetracks and Kaisoku are affected by the weather, so make sure to
							check the forecast before a race.
						</p>
					</>}
				/>
			</div>
		</Scene>
	}
}