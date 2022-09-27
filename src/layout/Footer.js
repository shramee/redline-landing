import logo from '../assets/redline-logo.png';
import twitter from '../assets/twitter.svg';
import discord from '../assets/discord.svg';

export default function Footer() {
	return <footer id="site-footer" className="pv4 ph5-m w-100 pa3 ph4-ns">
		<img className='w5 fr db' src={logo} alt='Redline'/>
		<div className="tc fl">
			<p className="dib ma0 f5 tracked">&copy;2022 Redline</p>

			<a className="link dim white dib v-mid ml4" href="https://twitter.com/PlayRedline">
				<img className="h1 db" alt="Twitter" src={twitter}/>
			</a>
			<a className="link dim white dib v-mid ml4" href="https://discord.gg/UKmSwPrKjw">
				<img className="h1 db" alt="Discord channel" src={discord}/>
			</a>
			<a className="link dim white dib v-mid ml4" href="https://redline.crew3.xyz/">
				<img className="h1 db" alt="Youtube" src="https://crew3.xyz/static/media/Crew3_150x47.5.40902c36d4459e858b9b31d1deee26e0.svg"/>
			</a>
		</div>
	</footer>
		;
}