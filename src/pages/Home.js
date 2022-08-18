import {
	twitchURL,
	rewardsLinks,
	sponsorLinks,
} from "../conf";

const Home = () => <article className="">
	<div className="mw9 center">
		<div className="cf">
			<div className="fl w-100 w-70-ns pr3 white">
				<div className="aspect-ratio aspect-ratio--16x9 mb4">
					<iframe className="aspect-ratio--object cover o-05" frameBorder="0" allowFullScreen scrolling="no"
									height="450" width="800" src={twitchURL}/>
				</div>
				<section className="links dt">
					<nav className="f6 fw6 tracked dt-row">
						<h4 className='dtc ttu v-mid'>Rewards links:</h4>
						<div className='dtc pa3'>
							{
								rewardsLinks.map(
									( [text, url], i ) =>
										<a key={i} className="link dim white dib ml4" href={url}>{text}</a>
								)
							}
						</div>
					</nav>
					<nav className="f6 fw6 tracked dt-row">
						<h4 className='dtc ttu'>Sponsors:</h4>
						<div className='dtc pa3'>
							{
								sponsorLinks.map(
									( [text, url], i ) =>
										<a key={i} className="link f4 dim white dib ml4" href={url}>{text}</a>
								)
							}
						</div>
					</nav>
				</section>
			</div>
			<div className="fl w-100 w-30-ns">
				<div className="outline bg-white pv4"></div>
			</div>
		</div>
	</div>
</article>;

export default Home;
