import WalletConnect from '../components/WalletConnect';
import {Consumer} from "../app/AppContext";

const Header = () => {
	return <Consumer>
		{( {setWallet} ) =>
			<header className="dt w-100 flex border-box pa3 ph4-ns absolute absolute-fill z-5">
				<h1 className="white f3 ma0 v-mid ttu logo" style={{letterSpacing: '.9em'}}>
					<a className="white link dim mr-auto" href="#" title="Home">
						RedL<span style={{verticalAlign: '-1px', fontSize: '1.05em', color: 'var(--accent)'}}>i</span>ne
					</a>
				</h1>
				<nav id='nav'>
					<a href="#about">About</a>
					<a href="#features">Features</a>
					<a href="#team">Team</a>
					<a href="#roadmap">Road map</a>
					<a className='play-btn btn' href="//alpha.redline.game"><span>Play Now</span></a>
				</nav>
			</header>
		}
	</Consumer>;
}

export default Header;