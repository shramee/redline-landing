import Header from './layout/Header'
import Home from './pages/Home'
import AppContext from './app/AppContext';
import {useEffect, useState} from "react";

function App() {
	const [wallet, setWallet] = useState();
	useEffect( () => {}, [] );
	return (
		<AppContext.Provider value={{
			wallet,
			isConnected: !!wallet?.isConnected,
			setWallet
		}}>
			<div className="App min-vh-100 flex flex-column items-center w-100 near-white">
				<Header/>
				<Home/>
			</div>
		</AppContext.Provider>
	);
}

export default App;
