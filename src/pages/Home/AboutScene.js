import {Component} from "react";
import Scene from "../../components/Scene";
import HugeBgText from '../../components/HugeBgText';
import ScrollAndMouse from "../../services/scrollAndMouse";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import loreVideo from "../../assets/lore.webm";
import loreVideoMP4 from "../../assets/lore.mp4";

const snm = window.snm || new ScrollAndMouse();

export default class AboutScene extends Component {
	render() {
		return <Scene id='about' className='overflow-hidden' contentStyle={{
			background   : 'linear-gradient(#000, #000, 45deg)',
		}} bgChildren={<HugeBgText>ABOUT</HugeBgText>}>
			<div className="w-100 w-80-l mw9">
				<TwoColumnLayout
					mid flip fullMedium
					visual={<div className='frame'>
						<video autoPlay loop muted playsInline>
							<source src={loreVideo} type="video/webm" />
							<source src={loreVideoMP4} type="video/mp4" />
						</video>
				</div>}
					content={<>
						<h2 ref={el => snm.addScrollTarget(el)} className="scene-title anims heading-anim mb4">About</h2>
						<p key={0} className='lh-copy measure'>
							Redline is a racing management game that runs on the StarkNet blockchain.
							The alpha preview can be played on the testnet.
						</p>
						<p key={1} className='lh-copy measure'>
							The game revolves around collecting NFT parts and strategically building your own NFT robots.
							To win race prizes your robots must take maximum advantage of the terrain and weather conditions.<br/>
						</p>
						<p key={2} className='lh-copy measure'>
							The game is fully on chain so the distribution of prizes is trustless and transparent.
							{/*Six robots race on a tracks opening a plethora of terrain based optimisation opportunities.*/}
						</p>
						<a href="//alpha.redline.game" className="btn btn-red f3-l f5 mt4" style={{textTransform:'none'}}>
							Get free NFT starter pack</a>
					</>}
				/>
			</div>
		</Scene>
	}
}