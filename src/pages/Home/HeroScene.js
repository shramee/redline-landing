import {Component} from "react";
import Scene from "../../components/Scene";
import video from "../../assets/hero-bg.webm";
import videoMP4 from "../../assets/hero-bg.mp4";
import mobileBG from "../../assets/hero-bg-mobile.webp";

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
		return <Scene id='hero' className=' dotted-overlay-after' bgChildren={<>
			<video className='bg absolute absolute--fill' loop autoPlay muted playsInline>
				<source src={video} type="video/webm" />
				<source src={videoMP4} type="video/mp4" />
			</video>
			{/*<div className='db dn-l bg absolute absolute--fill' style={{background: `center/cover url(${mobileBG})`}} />*/}
		</>} contentStyle={{
			minHeight: '100vh',
			background   : 'linear-gradient(#000, #000, 45deg)',
		}}>
			<div className='mr-auto f3 f5-l'>
				<h1 className='hero-head ma0 mb4 o-70' style={{
					textShadow: '-.03em .03em .03em #0004, 0 0 .3em #0005',
//								boxShadow: '1px 1px 25px 2px #000',
//					'-webkit-background-clip': 'text',
//					backgroundClip: 'text',
//					'-webkit-text-fill-color': 'transparent',
//					color: 'transparent'
				}}>
					<span className="db dib-l">Build<span className="clr">.&nbsp;</span></span>
					<span className="db dib-l">Race<span className="clr">.&nbsp;</span></span>
					<span className="db dib-l">Win<span className="clr">.&nbsp;</span></span>
				</h1>
			</div>
			<h2 className='f-4 nb2 tracked-l mt-auto mr-auto w-100 hero-sub flex-l items-center justify-between'>
				<div className='db dib-l tc-m' ref={el => this.stagger( el ) } style={{
					textShadow: '0 0 .3em #0005',
				}}>
					<span className="db dib-ns mb3 mb0-l anim fadeInUp">Collect and assemble giant NFT robots</span>
					<span className='dn dib-ns anim fadeInBig clr ma3 f-3'>&bull;</span>
					<span className="db dib-ns mb3 mb0-l anim fadeInUp">Race in the XX branch universe</span>
					<span className='dn dib-l anim fadeInBig clr ma3 f-3'>&bull;</span>
					<span className="db dib-l mb3 mb0-l anim fadeInUp">Beat competitors and win cash prizes.</span>
				</div>
				<a href="//alpha.redline.game" style={{minWidth: '8.2em'}} className="f3-l tc tl-l w-100 w-auto-l btn play-btn mt3 nt4-l">Play now</a>
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