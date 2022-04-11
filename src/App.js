import './App.css';
import NavBar from './containers/NavBar/NavBar';
import NFTs from './containers/NFTs/NFTs';
import SidePanel from './containers/SidePanel/SidePanel';
import Banner from './components/Banner/Banner';

function App() {
	return (
		<div className="App">
			<SidePanel />
			<section className="ContentContainer">
				<NavBar />
				<Banner />
				<div className='SectionHeadingContainer'>
					<span className='SectionHeading'>All NFTs</span>
					<span className='ItemCount'>8 items</span>
				</div>
				<NFTs />
			</section>
		</div>
	);
}

export default App;
