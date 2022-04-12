import React from "react";
import style from './NFTCard.module.css'
import { EthereumIcon } from "../../icons";

const NFTCard = props => {
	return (
		<div className={style.NFTCard}>
			<img
				src={props.imageLink}
				alt="NFT"
				className={style.NFTImage}
			/>
			<div className={style.NFTDescription}>
				<div className={style.NFTDetails}>
					<span className={style.NFTCreator}>{props.creator}</span>
					<span className={style.NFTName}>{props.name}</span>
				</div>

				<div className={style.NFTPriceContent}>
					<span className={style.NFTPriceText}>Current Price</span>
					<div className={style.NFTPriceContainer}>
						<EthereumIcon />
						<span className={style.NFTPrice}>{props.price}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NFTCard