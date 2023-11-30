import React, { useState, useEffect } from 'react';

import LogoIcon from 'images/icons/LogoIcon';
import BurgerIcon from 'images/icons/BurgerIcon';
import DownIcon from 'images/icons/DownIcon';

import style from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`${style.headerWrapper} ${isScrolled ? style.scrolled : ''}`}
    >
      <header className={style.header}>
        <a href="index.html" className={style.logoIcon}>
          <LogoIcon color={'#173D33'} />
        </a>
        <button className={style.menuButton} type="button">
          <BurgerIcon />
        </button>

        <button
          className={`${style.contactButton} ${
            width < 767 ? style.visuallyHidden : ''
          }`}
          type="button"
        >
          <span className={style.contactButtonText}>Get in touch</span>
          <DownIcon color={'#173D33'} />
        </button>
      </header>
    </div>
  );
};

export default Header;
