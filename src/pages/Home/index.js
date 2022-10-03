import HeroScene from './HeroScene';
import RaceScene from './RaceScene';
import AboutScene from './AboutScene';
import FeatureScene from './FeatureScene';
import TeamScene from './TeamScene';
import RoadmapScene from './RoadmapScene';

//import KenBurns from '../../components/KenBurns';
//import empress from '../../assets/bg/empress.png';
//import city from '../../assets/bg/city.png';

const Home = props =>
	<article className="">
		<HeroScene/>
		<RaceScene/>
		{/*<KenBurns img={city}/>*/}
		<AboutScene/>
		<FeatureScene/>
		{/*<KenBurns img={empress}/>*/}
		<TeamScene/>
		<RoadmapScene/>
	</article>;

export default Home;
