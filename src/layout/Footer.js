import logo from '../assets/redline-logo.png';
import twitter from '../assets/twitter.svg';
import discord from '../assets/discord.svg';
import crew3 from '../assets/crew3.svg';

export default function Footer() {

	const socialBtnClassses = "btn-flare pv2 ph3 ba br2 white-70 no-underline grow mh3 b inline-flex v-mid items-center mb3";
	const formElClassses = "pv3 ph4 mb3 ba br2 white-70 no-underline b v-mid";

	return <footer id="site-footer" className="pt5 ph5-m w-100 pa3 ph4-ns">
		<h2 className="scene-head mb4 tc">Join us</h2>

		<div className="mt4 tc mt4 mv5">
			<a className={socialBtnClassses}
				 href="https://twitter.com/PlayRedline" title="Follow us on Twitter">
				<div className="pv1 pr2">
					<svg className='dib v-mid h2' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
							 fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
						<path
							d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
							fillRule="nonzero">
						</path>
					</svg>
				</div>
				<span>Follow @PlayRedline</span>
			</a>
			<a className={socialBtnClassses}
				 href="http://tachyons-slack-invite.herokuapp.com" title="Join our Slack Channel">
				<div className="dib pv1 pr2">
					<img className="h1 db h2" alt="Discord channel" src={discord}/>
				</div>
				<span>
          Join our Discord
        </span>
			</a>
			<a className={socialBtnClassses}
				 href="https://github.com/redline-dao/data"
				 title="File a bug, request a feature, ask a question!">
				<div className="pv1 pr2">
					<svg className='dib v-mid h2' xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 16 16"
							 fillRule="evenodd"
							 clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
						<path
							d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8">

						</path>
					</svg>
				</div>
				<span>View race data</span>
			</a>
			<a className={socialBtnClassses}
				 href="https://github.com/redline-dao/data"
				 title="File a bug, request a feature, ask a question!">
				<div className="pv1 pr2">
					<img className="h2 db" alt="Crew3" src={crew3}/>
				</div>
				<span>Join our community</span>
			</a>
		</div>

		<form action="https://game.us14.list-manage.com/subscribe/post?u=f5f7331f2ab2152f78c63c456&amp;id=370c2f82ae"
					method="post" name="mc-embedded-subscribe-form" target="_blank"
					className="mw7 w-100 center flex flex-wrap flex-nowrap-l items-stretch content-stretch mv5 pv3">
			<input type="email" required name="EMAIL" id="mce-EMAIL" className={`${formElClassses} bg-white-10 b--white tracked w-100 w-70-l br--left-l br-0-l`} placeholder="Your Email Address"/>

			<button className={`${formElClassses} btn-flare br--right-l w-100 w-40-l tc`} type="submit" name="subscribe" id="mc-embedded-subscribe">
				Subscribe to newsletter
			</button>

			<input type="hidden" name="tags" value="7260243"/>
			<input className='fixed' style={{left: '-99999vw'}} type="text" name="b_f5f7331f2ab2152f78c63c456_370c2f82ae"
						 tabIndex="-1"/>
		</form>

		<hr className='bt-0 o-20 mb3'/>

		<img className='w5 fr dn db-l' src={logo} alt='Redline'/>
		<div className="tc fl">
			<p className="dib ma0 f5 tracked">&copy;2022 Redline</p>
			<a className="link dim white dib v-mid ml4" href="https://twitter.com/PlayRedline">
				<img className="h1 db" alt="Twitter" src={twitter}/>
			</a>
			<a className="link dim white dib v-mid ml4" href="https://discord.gg/UKmSwPrKjw">
				<img className="h1 db" alt="Discord channel" src={discord}/>
			</a>
			<a className="link dim white dib v-mid ml4" href="https://redline.crew3.xyz/">
				<img className="h1 db" alt="Crew3" src={crew3}/>
			</a>
		</div>
	</footer>
		;
}