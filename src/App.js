import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import AppContext from './app/AppContext';
import {Component, useEffect, useState} from "react";

class App extends Component {
	state = {
		wallet: null
	}
	componentDidMount() {
		document.body.classList.add( 'top' );
		window.addEventListener( 'scroll', function() {
			if ( window.scrollY < .5 * window.innerHeight ) {
				document.body.classList.add( 'top' )
			} else {
				document.body.classList.remove( 'top' )
			}
		} )
	}

	render() {
		const {wallet} = this.state;
		return (
			<AppContext.Provider value={{
				wallet,
				isConnected: !!wallet?.isConnected,
				setWallet: wallet => this.setState( {wallet} )
			}}>
				<div className="App min-vh-100 flex flex-column items-center w-100 near-white">
					<Header/>
					<Home/>
					<Footer />
				</div>
			</AppContext.Provider>
		);
	}
}

export default App;
