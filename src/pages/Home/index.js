import video from '../../assets/hero-bg.mp4';
import Scene from '../../components/Scene';


const Home = () =>
	<article className="">
		<Scene video={video} contentStyle={{
			background: 'linear-gradient(#000, #000, 45deg)',
			paddingTop: 'calc( 3em + 7vh )',
			paddingBottom: '5vmin',
		}}>
			<div className='mr-auto'>
				<h1 className='hero-head ma0 mb4 o-70' style={{
					textShadow: '-.03em .03em .03em 3px #0005, 0 0 .1em 3px #0005',
//					'-webkit-background-clip': 'text',
//					backgroundClip: 'text',
//					'-webkit-text-fill-color': 'transparent',
//					color: 'transparent'
				}}>
					Build<span className="clr">. </span>
					Race<span className="clr">. </span>
					Win<span className="clr">. </span>
				</h1>
			</div>
			<h2 className='f-4 nb2 tracked mt-auto mr-auto w-100 hero-sub'>
				<a href="" style={{fontSize: '1.4em'}} className="fr btn play-btn nt4">Play now</a>
				Collect and assemble giant NFT robots
				<span className='clr ma3 f-3'>&bull;</span>
				Race in the XX branch universe
				<span className='clr ma3 f-3'>&bull;</span>
				Beat competitors and win cash prizes.
				{/**
				Race around the world
				Collect NFTs
				Build NFT robots
				Compete with builder
				Beat competitors. Win cash prizes
				 */}
			</h2>
		</Scene>
		<Scene>

		</Scene>
	</article>
;

export default Home;
