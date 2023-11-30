import React, { useState, useEffect } from 'react';

import style from './Contacts.module.scss';

const Contacts = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className={style.mainContactWrapper}>
    <p className={style.mainContact}>
      <span className={style.mainAddress}>
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </span>{' '}
      <span className={style.mainEmail}>office@ecosolution.com</span>
      {(width > 768) && <span className={style.mainCopy}>ecosolution © 2023</span>}
    </p>
    </div>
  );
};

export default Contacts;
