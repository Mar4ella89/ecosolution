import React from 'react';

import { ReactComponent as FbIcon } from 'images/svg/fb.svg';
import { ReactComponent as InstIcon } from 'images/svg/inst.svg';

import style from './Social.module.scss';

const Social = () => {
  return (
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
  );
};

export default Social;
