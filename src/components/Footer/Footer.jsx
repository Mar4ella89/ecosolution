import React from 'react';

import useWindowWidth from 'hooks/useWindowWidth';

import HorizontLine from 'components/HorizontLine/HorizontLine';
import Container from 'components/Container/Container';
import Social from 'components/Social/Social';

import LogoIcon from 'images/icons/LogoIcon';
import UpIcon from 'images/icons/UpIcon';

import style from './Footer.module.scss';

const Footer = () => {
  const width = useWindowWidth();
  return (
    <Container>
      <div className={style.footer}>
        <HorizontLine />
        <div className={style.logowrapper}>
          <a href="index.html" className={style.link}>
            <LogoIcon color={'#173D33'} className={style.logoIcon} />
          </a>
          {width > 768 && <Social customStyles={style.socialList} />}
          <button type="button" className={style.upBtn}>
            <UpIcon />
          </button>
        </div>
        {width < 768 && <Social customStyles={style.socialList} />}
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
