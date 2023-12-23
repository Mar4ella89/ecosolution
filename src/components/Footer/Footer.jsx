import React from 'react';

import useWindowWidth from 'hooks/useWindowWidth';

import HorizontLine from 'components/HorizontLine/HorizontLine';
import Container from 'components/Container/Container';
import Social from 'components/Social/Social';

import LogoIcon from 'images/icons/LogoIcon';
import UpIcon from 'images/icons/UpIcon';

import { ReactComponent as FbIcon } from 'images/svg/fb.svg';
import { ReactComponent as InstIcon } from 'images/svg/inst.svg';

import style from './Footer.module.scss';

const Footer = () => {
  const width = useWindowWidth();
  return (
    <Container>
      <div className={style.footer}>
        <HorizontLine />
        <div className={style.logowrapper}>
          <a href="index.html">
            <LogoIcon color={'#173D33'} className={style.logoIcon} />
          </a>
          <button type="button" className={style.upBtn}>
            <UpIcon />
          </button>
        </div>
        <Social />
        {/* <ul className={style.socialList}>
          <li>
            <a href="https://facebook.com/" className={style.link}>
              <FbIcon className={`${style.social} ${style.linkFB}`} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" className={style.link}>
              <InstIcon className={style.social} />
            </a>
          </li>
        </ul> */}
        <div className={style.contactWrapper}>
          <p className={style.contact}>
            <span className={style.address}>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </span>
            <span className={style.email}>office@ecosolution.com</span>
            <span className={style.сopy}>ecosolution © 2023</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
