import React from "react";
import style from './Banner.module.css'

const Banner = () => {
	return (
		<div className={style.Banner}>
			<div className={style.BannerContainer}>
				<div className={style.BannerContent}>
					<span className={style.BannerHeading}>
						Explore and create NFTs.
					</span>
					<span className={style.BannerText}>
						The largest decentralized NFT marketplace in the world.
					</span>

					<div className={style.ButtonContainer}>
						<button className={style.PrimaryCTA}>Explore</button>
						<button className={style.SecondaryCTA}>Create</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Banner