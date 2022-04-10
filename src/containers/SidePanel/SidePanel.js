import style from './SidePanel.module.css';
import {
	Logo,
	HomeIcon,
	ExploreIcon,
	CartIcon,
	UserIcon,
	WalletIcon
} from '../../icons';

const SidePanel = () => {
	return (
		<section className={style.SidePanel}>
			<div className={style.SidePanelIcons}>
				<Logo />
				<HomeIcon />
				<ExploreIcon />
				<CartIcon />
				<UserIcon />
				<WalletIcon />
			</div>
		</section>
	)
}

export default SidePanel;