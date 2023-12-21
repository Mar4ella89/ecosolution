import React from 'react';

import HorizontLine from 'components/HorizontLine/HorizontLine';
import Container from 'components/Container/Container';

import LogoIcon from 'images/icons/LogoIcon';
import Contacts from 'components/Contacts/Contacts';
import UpIcon from 'images/icons/UpIcon';

import { ReactComponent as FbIcon } from 'images/svg/fb.svg';
import { ReactComponent as InstIcon } from 'images/svg/inst.svg';

import useWindowWidth from 'hooks/useWindowWidth';

import style from './Footer.module.scss';

const Footer = () => {
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
        <ul className={style.socialList}>
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
        </ul>

        <Contacts />
        <p>ecosolution © 2023</p>
      </div>
    </Container>
  );
};

export default Footer;
