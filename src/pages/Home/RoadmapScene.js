import {Component} from "react";
import Scene from "../../components/Scene";
import ScrollAndMouse from "../../services/scrollAndMouse";
import robotsImg from '../../assets/features/robots.png';

const snm = window.snm || new ScrollAndMouse();

const progress = 1;
const itemHeight = 8;
const items = [
	[
		<span>Proof of concept</span>,
		<small className='db o-60 f5'>StrakNet &amp; Unreal integration</small>
	],
	[<span>Alpha Playtesting</span>,],
	[<span>Backend account handling and direct fiat</span>,],
	[<span>Sponsor System</span>, <small className='db o-60 f5'>Fully on chain and peer reviewed</small>],
	[<span>Advanced racing systems & content</span>,],
	[<span>Animation overhaul</span>,],
	[<span>StarkNet Mainnet Release</span>, '', 'roadmap-item-big'],
	[
		<span>Platform expansion: </span>,
		<small className='db o-60 f5'>Webgl, mobile, other blockchain bridges</small>
	],
	[<span>Robot parts 2nd edition</span>,],
	[<span>Betting system</span>,],
	[<span>Future: </span>, <small className='db o-60 f5'>New games in the Redline universe</small>],
];

export default function AboutScene() {
	const progressMarker = <span className="ml2 dib bg-dark-green br2 dib f6 lh-solid pa2 ttu v-mid">In progress</span>;
	const finishedMarker = <span className="ml2 dib bg-dark-blue br2 dib f6 lh-solid pa2 ttu v-mid">Done</span>;
	return <Scene id='roadmap' className='overflow-hidden bg-chart' bgChildren={''}>
		<div ref={el => snm.addScrollTarget( el )} className="w-100 w-80-l mw9">
			<h2 ref={el => snm.addScrollTarget( el )} className="scene-title anims heading-anim mb4 pt5">Roadmap</h2>
			<div className="roadmap-wrap">
				<div className="roadmap-items">
					<div className="roadmap-road">
						<div ref={el => snm.addScrollTarget( el )} className="roadmap-bots" style={{
							transform: `translateY(${999 + progress * itemHeight}rem)`
						}}>
							<img className='' src={robotsImg} alt="Robots"/>
						</div>
					</div>
					{items.map( ( [head, desc, className], i ) => <p className={`roadmap-item ${className}`} style={{height: itemHeight + 'rem'}}>
						<span className='db'>
							{head}
							{progress === i && progressMarker}
							{progress > i && finishedMarker}
						</span>
						{desc}
					</p> )}
				</div>
			</div>
		</div>
	</Scene>
}