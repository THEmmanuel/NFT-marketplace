import style from './NFTs.module.css'
import NFTCard from '../../components/NFT/NFTCard';
import data from '../../data';

const NFTs = () => {
	return (
		<section className={style.NFTs}>
			{data.map(data =>
				<NFTCard
					name={data.name}
					creator={data.creator}
					imageLink={data.imageLink}
					price={data.price}
					likes={data.likes}
					isVerified={data.isVerified}
					openseaLink={data.openseaLink}
				/>)
			}
		</section>
	)
}

export default NFTs;