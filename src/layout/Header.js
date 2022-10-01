import {Consumer} from "../app/AppContext";
import logo from '../assets/redline-logo.png';

const Header = () => {
	const scrollTo = (e, id) => {
		e.preventDefault();
		const element = typeof id === 'string' ? document.getElementById( id ) : id;
		element && element.scrollIntoView( {block: 'start', behavior: 'smooth'} );
	}
	return <Consumer>
		{( {setWallet} ) =>
			<header id='site-header' className="dt w-100 pa3 ph4-ns flex border-box fixed absolute-fill z-5">
				<h1 className="relative white f3 v-mid ttu logo mr3-l pr2-l mt2 pt1 mb-auto ml0" style={{letterSpacing: '.9em'}}>
					<a href="#" onClick={e => scrollTo( e, document.body )}>
						<img className='w-100 w5-l' src={logo} alt='Redline' />
					</a>
				</h1>
				<nav id='nav' className='dn flex-l'>
					<a onClick={e => scrollTo( e, 'about' )} href="#about">About</a>
					<a onClick={e => scrollTo( e, 'features' )} href="#features">Features</a>
					<a onClick={e => scrollTo( e, 'team' )} href="#team">Team</a>
					<a onClick={e => scrollTo( e, 'roadmap' )} href="#roadmap">Roadmap</a>
					<a className='play-btn btn' href="//alpha.redline.game"><span>Play Now</span></a>
				</nav>
			</header>
		}
	</Consumer>;
}

export default Header;