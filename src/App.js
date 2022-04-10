import './App.css';
import NavBar from './containers/NavBar/NavBar';
import NFTs from './containers/NFTs/NFTs';
import SidePanel from './containers/SidePanel/SidePanel';

function App() {
  return (
    <div className="App">
		<SidePanel/>
		<NavBar/>
		<NFTs/>
    </div>
  );
}

export default App;
