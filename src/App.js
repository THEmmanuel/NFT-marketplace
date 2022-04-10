import './App.css';
import NavBar from './containers/NavBar/NavBar';
import NFTs from './containers/NFTs/NFTs';
import SidePanel from './containers/SidePanel/SidePanel';

function App() {
	return (
		<div className="App">
			<SidePanel />
			<section className="ContentContainer">
				<NavBar />
				<NFTs />
			</section>
		</div>
	);
}

export default App;
