import React from 'react';

import LogoIcon from 'images/icons/LogoIcon';
import Contacts from 'components/Contacts/Contacts';
import UpIcon from 'images/icons/UpIcon';

import style from './Footer.module.scss';

const Footer = () => {

  return (
    <>
      <a href="index.html">
        <LogoIcon color={'#173D33'} className={style.logoIcon} />
      </a>
      <UpIcon className={style.upIcon}/>
      <Contacts/>
      <p>ecosolution © 2023</p>
    </>
  );
};

export default Footer;
