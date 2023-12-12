import React from 'react';

import HorizontLine from 'components/HorizontLine/HorizontLine';
import LogoIcon from 'images/icons/LogoIcon';
import Contacts from 'components/Contacts/Contacts';
import UpIcon from 'images/icons/UpIcon';

import style from './Footer.module.scss';

const Footer = () => {
  return (
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

      <Contacts />
      <p>ecosolution © 2023</p>
    </div>
  );
};

export default Footer;
