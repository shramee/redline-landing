import Header from './layout/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="App min-vh-100 flex flex-column w-100 bg-black">
      <header className="dt w-100 border-box pa3 ph4-ns bb" style={{borderBottom: '3px solid #e00'}}>
        <Header />
      </header>

      <section className='w-100 pa3 ph4-ns'>
        <Home />
      </section>
    </div>
  );
}

export default App;
