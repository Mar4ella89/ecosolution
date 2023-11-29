import LogoIcon from 'images/icons/LogoIcon';
import BurgerIcon from 'images/icons/BurgerIcon';
import DownIcon from 'images/icons/DownIcon';

import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <a href="index.html" className={style.logoIcon}>
        <LogoIcon color={'#173D33'} />
      </a>
      <button className={style.menuButton} type="button">
        <BurgerIcon />
      </button>

      <button
        className={(style.contactButton, style.visuallyHidden)}
        type="button"
      >
        <span className={style.contactButtonText}>Get in touch</span>
        <DownIcon color={'#173D33'} />
      </button>
    </header>
  );
};

export default Header;
