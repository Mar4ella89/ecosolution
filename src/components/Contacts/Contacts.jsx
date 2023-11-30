import React, { useState, useEffect } from 'react';

import style from './Contacts.module.scss';

const Contacts = () => {
  const [width, setWidth] = useState(0);

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
    <div className={style.mainContactWrapper}>
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
