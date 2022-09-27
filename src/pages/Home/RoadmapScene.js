import {Component} from "react";
import Scene from "../../components/Scene";
import ScrollAndMouse from "../../services/scrollAndMouse";
import robotsImg from '../../assets/features/robots.png';

const snm = window.snm || new ScrollAndMouse();

const progress = 0;

const items = [
	<span>Alpha Playtesting</span>,
	<span>Backend account handling and direct fiat</span>,
	<span>Sponsor System</span>,
	<span>Advanced racing systems & content</span>,
	<span>Animation overhaul</span>,
	<span>StarkNet Mainnet Release</span>,
	<span>Platform expansion: webgl, mobile, other', 'blockchain bridges</span>,
	<span>Robot parts 2nd edition</span>,
	<span>Betting system</span>,
	<span>Future: new games in the Redline universe</span>,
];

export default function AboutScene() {
	const progressMarker = <span className="dib br-pill bg-dark-green ph3 pb1">In progress</span>;
	return <Scene id='roadmap' className='overflow-hidden bg-chart' style={{
		background: 'linear-gradient(-80deg, rgb(2, 9, 24) 0%, rgb(28, 45, 77) 66%, rgb(9, 29, 71) 100%)',
	}} bgChildren={''}>
		<div className="w-100 w-80-l mw9">
			<h2 ref={el => snm.addScrollTarget( el )} className="scene-title anims heading-anim mb4 pt5">Roadmap</h2>
			<div className="roadmap-wrap nt5">
				<div className="roadmap-items">
					<div className="roadmap-road">
						<div ref={el => snm.addScrollTarget( el )} className="roadmap-bots" style={{
							transform: `translateY(${25 + progress * 7}rem)`}}>
							<img className='' src={robotsImg} alt="Robots"/>
						</div>
					</div>
					{items.map( ( item, i ) => <p className='roadmap-item'>{item} {progress === i && progressMarker}</p> )}
				</div>
			</div>
		</div>
	</Scene>
}