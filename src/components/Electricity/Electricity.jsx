import React from 'react';

import VerticalLine from 'components/VerticalLine/VerticalLine';

import style from './Electricity.module.scss';

const Electricity = () => {
  return (
    <section className={style.electricitySection}>
      <h2 className={style.electricityTitle}>
        Electricity we produced for all time
      </h2>
      <div className={style.electricityLineWrapper}>
        <VerticalLine />
      </div>

      <div className={style.counterWrapper}>
        <span className={style.counter}>1.134.147.814</span> <span className={style.unit}>kWh</span>
      </div>
    </section>
  );
};

export default Electricity;
