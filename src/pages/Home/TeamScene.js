import ScrollAndMouse from "../../services/scrollAndMouse";
import Scene from "../../components/Scene";

import Corentin from '../../assets/team/Corentin.png';
import Shramee from '../../assets/team/Shramee.png';
import David from '../../assets/team/David.png';
import Alex from '../../assets/team/Alex.png';
import Scott from '../../assets/team/Scott.png';
import PA from '../../assets/team/PA.png';
import You from '../../assets/team/you.png';
import HugeBgText from "../../components/HugeBgText";

import argent from '../../assets/partners/argent-x.svg';
import aspect from '../../assets/partners/aspect.png';
import cartridge from '../../assets/partners/cartridge.svg';
import chainlink from '../../assets/partners/chainlink.png';
import mintsquare from '../../assets/partners/mintsquare.png';
import yagi from '../../assets/partners/yagi.svg';
import starkware from '../../assets/partners/starkware.png';

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
	{
		img: You,
		name: 'You',
		position: "Perfect role",
		link: <a href='mailto:hello@isotropic.io'><svg className='h1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#fff' d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a>,
	},
];

const partners = [
	['Starkware', starkware],
	['Argent-X', argent],
	['Aspect', aspect],
	['cartridge', cartridge],
	['chainlink', chainlink],
	['mintsquare', mintsquare],
	['yagi', yagi],
]

function staggerAnimate( el ) {
	snm.staggerChildren( el, .1, .2 );
	snm.addScrollTarget( el );
}

export default function TeamScene() {
	return <Scene id='team' bgChildren={''}>
		<HugeBgText scrollTarget>Team</HugeBgText>
		{/*<HugeBgText style={{top: 0}}>Partners</HugeBgText>*/}
		<div className="pt3 relative w-100 mw9 tc">
			<h2 ref={el => snm.addScrollTarget( el )} className="scene-title heading-anim pr5 tl-ns relative">Team</h2>
			<div ref={el => staggerAnimate( el )} className="relative w-100 mw8 center">
				{team.map( ( {link, img, name, position}, i) => <article key={i} className="dib v-top w-100 w-50-m w-25-l br3 pa3 mw5 mv3 border-box fadeInUp">
					<div className="">
						<img src={img} className="br2 w4 dib"
								 title={name} />
						<h3 className="f3 mt2 white-80 mb2 tracked">{name}</h3>
						<span className="f5 fw4 white-50 mt0">{position}</span>
						{link && <div>{link}</div>}
					</div>
				</article> )}
			</div>
		</div>
		<div className="mt6 pt5 relative w-100 mw9 tc">
			<h2 ref={el => snm.addScrollTarget( el )} className="scene-title heading-anim pr4 tl-ns relative">Partners</h2>
			<div ref={el => staggerAnimate( el )} className="relative f5 o-70">
				{partners.map( ([partner, img], i) =>
						<img key={i} src={img} className={`br2 mh4-l h4 pt5 dib ph4 pb3 border-box fadeInUp ${partner === 'yagi' && 'pb4'}`} alt={partner} /> )}
			</div>
		</div>
	</Scene>;
}