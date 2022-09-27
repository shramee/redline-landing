import {Component} from "react";
import Scene from "../../components/Scene";
import video from "../../assets/hero-bg.mp4";

import ScrollAndMouse from "../../services/scrollAndMouse";
const snm = window.snm || new ScrollAndMouse();

export default class HeroScene extends Component {
	stagger( el ) {
		if ( el ) {
			this.staggerEl = el; // Cache stagger el
		}
		snm.staggerChildren( this.staggerEl, .5, .5 );
	}

	render() {
		return <Scene id='hero' className='dotted-buzzing-overlay' video={video} contentStyle={{
			background   : 'linear-gradient(#000, #000, 45deg)',
			paddingTop   : 'calc( 3em + 7vh )',
			paddingBottom: '5vmin',
		}}>
			<div className='mr-auto'>
				<h1 className='hero-head ma0 mb4 o-70' style={{
					textShadow: '-.03em .03em .03em #0005, 0 0 .3em #0005',
//								boxShadow: '1px 1px 25px 2px #000',
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
				<div className='dib' ref={el => this.stagger( el ) }>
					<span className="dib anim fadeInUp">Collect and assemble giant NFT robots</span>
					<span className='dib anim fadeInBig clr ma3 f-3'>&bull;</span>
					<span className="dib anim fadeInUp">Race in the XX branch universe</span>
					<span className='dib anim fadeInBig clr ma3 f-3'>&bull;</span>
					<span className="dib anim fadeInUp">Beat competitors and win cash prizes.</span>
				</div>
				<a href="//alpha.redline.game" style={{fontSize: '1.4em'}} className="btn play-btn nt4">Play now</a>
				{/**
				Race around the world
				Collect NFTs
				Build NFT robots
				Compete with builder
				Beat competitors. Win cash prizes
				 */}
			</h2>
		</Scene>
	}
}