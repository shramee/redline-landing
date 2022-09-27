import HeroScene from './HeroScene';
import RaceScene from './RaceScene';
import AboutScene from './AboutScene';
import FeatureScene from './FeatureScene';
import TeamScene from './TeamScene';
import RoadmapScene from './RoadmapScene';

const Home = props =>
	<article className="">
		<HeroScene/>
		<RaceScene/>
		<AboutScene/>
		<FeatureScene/>
		<TeamScene/>
		<RoadmapScene/>
	</article>;

export default Home;
