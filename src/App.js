import Header from './layout/Header'
import Home from './pages/Home'
import AppContext from './app/AppContext';
import {useEffect, useState} from "react";

function App() {
	const [ wallet, setWallet ] = useState();
	useEffect( () => {}, [] );
	return (
		<AppContext.Provider value={{
			wallet,
			isConnected: !!wallet?.isConnected,
			setWallet
		}}>
			<div className="App min-vh-100 flex flex-column w-100 bg-near-black near-white">
				<header className="dt w-100 border-box pa3 ph4-ns bb b--white-10">
					<Header/>
				</header>

				<section className='w-100 pa3 ph4-ns'>
					<Home/>
				</section>
			</div>
		</AppContext.Provider>
	);
}

export default App;
