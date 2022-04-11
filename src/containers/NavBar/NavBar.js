import style from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={style.NavBar}>
			<div className={style.NavContainer}>
				<input
					type="search"
					className={style.NavSearch}
					placeholder='Search by address, author or name' />

				<div className={style.NavLinksContainer}>
					<a href="http://" className={style.NavLink}>
						Explore
					</a>
					<a href="http://" className={style.NavLink}>
						Collection
					</a>
					<a href="http://" className={style.NavLink}>
						Activity
					</a>
					<a href="http://" className={style.NavLink}>
						About
					</a>
					<button className={style.ConnectWalletBtn}>
						Connect wallet
					</button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;