import React from "react";
import style from './NFTCard.module.css'

const NFTCard = () => {
	return (
		<div className={style.NFTCard}>
			<img src="" alt="NFT" />
			<div>
				<div>
					<span>NFT creator</span>
					<span>NFT Name</span>
				</div>

				<div>
					<span>Current Price</span>
					<span>NFT price</span>
				</div>
			</div>
		</div>
	)
}

export default NFTCard