import Header from './layout/Header'
import Home from './pages/Home'

function App() {
	return (
		<div className="App min-vh-100 flex flex-column w-100 bg-near-black">
			<header className="dt w-100 border-box pa3 ph4-ns bb" style={{borderBottom: '1px solid #222'}}>
				<Header/>
			</header>

			<section className='w-100 pa3 ph4-ns'>
				<Home/>
			</section>
		</div>
	);
}

export default App;
