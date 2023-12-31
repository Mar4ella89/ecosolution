import React from 'react';
import { Link } from 'react-scroll';

import useWindowWidth from 'hooks/useWindowWidth';
import HorizontLine from 'components/HorizontLine/HorizontLine';
import RightIcon from 'images/icons/RightIcon';
import Container from 'components/Container/Container';

import mainMob from 'images/jpg/mainImg/wind-turbine-clean-energy-mob.jpg';
import mainMob2x from 'images/jpg/mainImg/wind-turbine-clean-energy-mob-2x.jpg';
import mainMobWebp from 'images/jpg/mainImg/wind-turbine-clean-energy-mob.webp';
import mainMobWebp2x from 'images/jpg/mainImg/wind-turbine-clean-energy-mob-2x.webp';

import mainTab from 'images/jpg/mainImg/wind-turbine-clean-energy-tab.jpg';
import mainTab2x from 'images/jpg/mainImg/wind-turbine-clean-energy-tab-2x.jpg';
import mainTabWebp from 'images/jpg/mainImg/wind-turbine-clean-energy-tab.webp';
import mainTabWebp2x from 'images/jpg/mainImg/wind-turbine-clean-energy-tab-2x.webp';

import mainDesk from 'images/jpg/mainImg/wind-turbine-clean-energy-desktop.jpg';
import mainDesk2x from 'images/jpg/mainImg/wind-turbine-clean-energy-desktop-2x.jpg';
import mainDeskWebp from 'images/jpg/mainImg/wind-turbine-clean-energy-desktop.webp';
import mainDeskWebp2x from 'images/jpg/mainImg/wind-turbine-clean-energy-desktop-2x.webp';

import style from './Main.module.scss';

const Main = () => {
  const width = useWindowWidth();

  return (
    <Container>
      <section className={style.mainSection} id="main">
        <div className={style.mainWrapper}>
          <h1 className={style.mainTitle}>RENEWABLE ENERGY For any task</h1>
          <div className={style.mainInfoWrapper}>
            <p className={style.mainText}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <Link
              to="cases"
              smooth={true}
              duration={2000}
              offset={-120}
              className={style.mainButton}
            >
              <span className={style.mainButtonText}>Learn more</span>
              <RightIcon fill={'#97D28B'} />
            </Link>
          </div>
        </div>
        <HorizontLine />
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
        <picture>
          <source
            srcSet={`${mainDeskWebp} 1x, ${mainDeskWebp2x} 2x`}
            media="(min-width: 1280px)"
            type="image/webp"
          />
          <source
            srcSet={`${mainDesk} 1x, ${mainDesk2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${mainTabWebp} 1x, ${mainTabWebp2x} 2x`}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={`${mainTab} 1x, ${mainTab2x} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${mainMobWebp} 1x, ${mainMobWebp2x} 2x`}
            media="(max-width: 767px)"
            type="image/webp"
          />
          <source
            srcSet={`${mainMob} 1x, ${mainMob2x} 2x`}
            media="(max-width: 767px)"
          />
          <img
            src={mainMob}
            alt="Generating power generation using energy wind"
            width="320"
            height="200"
            className={style.mainImg}
          />
        </picture>
      </section>
    </Container>
  );
};

export default Main;
