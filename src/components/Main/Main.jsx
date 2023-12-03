import React from 'react';

import Contacts from 'components/Contacts/Contacts';
import HorizontLine from 'components/HorizontLine/HorizontLine';
import RightIcon from 'images/icons/RightIcon';

import style from './Main.module.scss';

const Main = () => {
  return (
    <section className={style.mainSection}>
      <div className={style.mainWrapper}>
        <h1 className={style.mainTitle}>RENEWABLE ENERGY For any task</h1>
        <div className={style.mainInfoWrapper}>
          <p className={style.mainText}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <button className={style.mainButton}>
            <span className={style.mainButtonText}>Learn more</span>
            <RightIcon fill={'#97D28B'}/>
          </button>
        </div>
      </div>
      <HorizontLine />
      <Contacts />
      <picture>
        <source
          srcSet="
                    mainImg/wind-turbine-clean-energy-desktop.webp 1x,
                    mainImg/wind-turbine-clean-energy-desktop-2x.webp 2x
                  "
          media="(min-width: 1280px)"
          type="image/webp"
        />
        <source
          srcSet="
                    mainImg/wind-turbine-clean-energy-desktop.jpg 1x,
                    mainImg/wind-turbine-clean-energy-desktop-2x.jpg 2x
                  "
          media="(min-width: 1280px)"
        />
        <source
          srcSet="
                    mainImg/wind-turbine-clean-energy-tab.webp 1x,
                    mainImg/wind-turbine-clean-energy-tab-2x.webp 2x
                  "
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet="
                    mainImg/wind-turbine-clean-energy-tab.jpg 1x,
                    mainImg/wind-turbine-clean-energy-tab-2x.jpg 2x
                  "
          media="(min-width: 768px)"
        />
        <source
          srcSet="
                    mainImg/wind-turbine-clean-energy-mob.webp 1x,
                    mainImg/wind-turbine-clean-energy-mob-2x.webp 2x
                  "
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet="
                    mainImg/wind-turbine-clean-energy-mob.jpg 1x,
                    mainImg/wind-turbine-clean-energy-mob-2x.jpg 2x
                  "
          media="(max-width: 767px)"
        />
        <img
          src="mainImg/wind-turbine-clean-energy-mob.jpg"
          alt="Generating power generation using energy wind"
          width="320"
          className={style.mainImg}
        />
      </picture>
    </section>
  );
};

export default Main;
