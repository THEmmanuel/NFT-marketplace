import style from './NFTs.module.css'
import NFTCard from '../../components/NFTCard/NFTCard';

const NFTs = () => {
	return (
		<section className={style.NFTs}>
			<NFTCard/>
		</section>
	)
}

export default NFTs;