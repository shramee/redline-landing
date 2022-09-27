import ScrollAndMouse from "../../services/scrollAndMouse";
import Scene from "../../components/Scene";

import Corentin from '../../assets/team/Corentin.png';
import Shramee from '../../assets/team/Shramee.png';
import David from '../../assets/team/David.png';
import Alex from '../../assets/team/Alex.png';
import Scott from '../../assets/team/Scott.png';
import PA from '../../assets/team/PA.png';
import HugeBgText from "../../components/HugeBgText";

const GEOFF = 'https://picsum.photos/seed/PIERRE/300';
const snm = window.snm || new ScrollAndMouse();







export default function TeamScene() {
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
	return <Scene id='team' bgChildren={''}>
		<div className="flex flex-wrap pt4 relative">
			<HugeBgText style={{top: '2rem'}}>Team</HugeBgText>
			<div className="relative">
				{team.map( member => <article className="dib w-100 w-50-m w-25-l br3 pa3 mv3 border-box">
					<div className="tc">
						<img src={member.img} className="br2 w4 dib"
								 title={member.name} />
						<h3 className="f3 mt2 white-80 mb2 tracked">{member.name}</h3>
						<span className="f5 fw4 white-50 mt0">{member.position}</span>
					</div>
				</article> )}
			</div>
		</div>
	</Scene>;
}