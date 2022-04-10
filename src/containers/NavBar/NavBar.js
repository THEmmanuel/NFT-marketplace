import style from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={style.NavBar}>
			<input type="search" className={style.NavSearch} />

			<div className={style.NavLinksContainer}>
				<a href="http://">Explore</a>
				<a href="http://">Collection</a>
				<a href="http://">Activity</a>
				<a href="http://">About</a>
				<button className={style.ConnectWalletBtn}>
					Connect wallet
				</button>
			</div>
		</nav>
	)
}

export default NavBar;