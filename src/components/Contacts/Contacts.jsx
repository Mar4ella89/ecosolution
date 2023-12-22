import React from 'react';

import useWindowWidth from 'hooks/useWindowWidth';

import style from './Contacts.module.scss';

const Contacts = ({ className }) => {
  const width = useWindowWidth();

  return (
    <div className={`${style.mainContactWrapper} ${className || ''}}`}>
      <p className={style.mainContact}>
        <span className={style.mainAddress}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </span>
        <span className={style.mainEmail}>office@ecosolution.com</span>
        {width > 768 && (
          <span className={style.mainCopy}>ecosolution © 2023</span>
        )}
      </p>
    </div>
  );
};

export default Contacts;
