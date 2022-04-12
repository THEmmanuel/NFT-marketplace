import React from "react";
import style from './NFTCard.module.css'

const NFTCard = props => {
	return (
		<div className={style.NFTCard}>
			<img
				src={props.imageLink}
				alt="NFT"
				className={style.NFTImage}
			/>
			<div>
				<div>
					<span>{props.creator}</span>
					<span>{props.name}</span>
				</div>

				<div>
					<span>Current Price</span>
					<span>{props.price}</span>
				</div>
			</div>
		</div>
	)
}

export default NFTCard