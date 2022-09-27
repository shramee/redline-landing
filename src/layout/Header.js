import WalletConnect from '../components/WalletConnect';
import {Consumer} from "../app/AppContext";
import liquidMetal from '../assets/liquid-metal.mp4';

const Header = () => {
	const scrollTo = (e, id) => {
		e.preventDefault();
		const element = document.getElementById( id );
		element && element.scrollIntoView( {block: 'start', behavior: 'smooth'} );
	}
	return <Consumer>
		{( {setWallet} ) =>
			<header id='site-header' className="dt w-100 flex border-box pa3 ph4-ns fixed absolute-fill z-5">
				<h1 className="relative white f3 ma0 v-mid ttu logo" style={{letterSpacing: '.9em'}}>
					<video className='bg' src={liquidMetal} loop={true} autoPlay={true} muted={true}/>
					<a className="no-underline" href="#" title="Home">
						RedL<span style={{verticalAlign: '-1px', fontSize: '1.05em', color: '#f00'}}>i</span>ne
					</a>
				</h1>
				<nav id='nav'>
					<a onClick={e => scrollTo( e, 'about' )} href="#about">About</a>
					<a onClick={e => scrollTo( e, 'features' )} href="#features">Features</a>
					<a onClick={e => scrollTo( e, 'team' )} href="#team">Team</a>
					<a onClick={e => scrollTo( e, 'roadmap' )} href="#roadmap">Road map</a>
					<a className='play-btn btn' href="//alpha.redline.game"><span>Play Now</span></a>
				</nav>
			</header>
		}
	</Consumer>;
}

export default Header;