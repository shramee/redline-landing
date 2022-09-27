import ScrollAndMouse from "../../services/scrollAndMouse";
import Scene from "../../components/Scene";

import Corentin from '../../assets/team/Corentin.png';
import Shramee from '../../assets/team/Shramee.png';
import David from '../../assets/team/David.png';
import Alex from '../../assets/team/Alex.png';
import Scott from '../../assets/team/Scott.png';
import PA from '../../assets/team/PA.png';
import HugeBgText from "../../components/HugeBgText";

import argent from '../../assets/partners/argent-x.svg';
import aspect from '../../assets/partners/aspect.png';
import cartridge from '../../assets/partners/cartridge.svg';
import chainlink from '../../assets/partners/chainlink.png';
import mintsquare from '../../assets/partners/mintsquare.svg';
import yagi from '../../assets/partners/yagi.svg';

const GEOFF = 'https://picsum.photos/seed/PIERRE/300';
const snm = window.snm || new ScrollAndMouse();

const team = [
	{
		img: Corentin,
		name: 'Corentin',
		position: 'CEO'
	},
	{
		img: Shramee,
		name: 'Shramee',
		position: 'CTO'
	},
	{
		img: David,
		name: 'David',
		position: 'GAME DESIGNER'
	},
	{
		img: Alex,
		name: 'Alex',
		position: 'ART DIRECTOR'
	},
	{
		img: GEOFF,
		name: 'Geoff',
		position: '3D ARTIST'
	},
	{
		img: Scott,
		name: 'Scott',
		position: 'CAIRO ADVISOR'
	},
	{
		img: PA,
		name: 'Pierre Alexis',
		position: 'ADVISOR'
	},
];

const partners = [
	['Argent-X', argent],
	['Aspect', aspect],
	['cartridge', cartridge],
	['chainlink', chainlink],
	['mintsquare', mintsquare],
	['yagi', yagi],
]




export default function TeamScene() {
	return <Scene id='team' bgChildren={''}>
		<div className="flex flex-wrap flex-nowrap-ns mt6 pt5 relative w-100 mw9">
			<HugeBgText style={{top: 0}}>Team</HugeBgText>
			<h2 className="scene-title pv4 pr5 tl-ns relative">Team</h2>
			<div className="relative w-100">
				{team.map( member => <article className="dib w-100 w-50-m w-25-l br3 pa3 mv3 border-box">
					<div className="">
						<img src={member.img} className="br2 w4 dib"
								 title={member.name} />
						<h3 className="f3 mt2 white-80 mb2 tracked">{member.name}</h3>
						<span className="f5 fw4 white-50 mt0">{member.position}</span>
					</div>
				</article> )}
			</div>
		</div>
		<div className="flex flex-wrap flex-nowrap-ns mt6 pt5 relative w-100 mw9">
			<HugeBgText style={{top: 0}}>Partners</HugeBgText>
			<h2 className="scene-title pv4 pr4 tl-ns relative">Partners</h2>
			<div className="relative f5">
				{partners.map( ([partner, img]) =>
						<img src={img} className="br2 h3-ns dib ma4 border-box" title={partner} /> )}
			</div>
		</div>
	</Scene>;
}