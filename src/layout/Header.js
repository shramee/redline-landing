import WalletConnect from '../components/WalletConnect';
import {Consumer} from "../app/AppContext";

const Header = () => {
	return <Consumer>
		{( {setWallet}) => {
			return <>
				<a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
					<h1 className="montserrat900 white f3 ma0 v-mid ttu">
						<span style={{verticalAlign: '-1px', color: '#e00'}}>Red</span>
						line
					</h1>
				</a>
				<nav className="dtc v-mid w-75 tr">
					<WalletConnect autoConnect={true} onConnectedStatusChange={( connected, wallet ) => setWallet( wallet )}/>
				</nav>
			</>;
		}}
	</Consumer>;
}

export default Header;