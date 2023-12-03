import React, { useRef, useState, useEffect } from 'react';


// import Slider from "react-slick";

import VerticalLine from 'components/VerticalLine/VerticalLine';
import HorizontLine from 'components/HorizontLine/HorizontLine';
import SliderCases from './Slider/SliderCases';
import RightBtnIcon from 'images/icons/RightBtnIcon';
import LeftBtnIcon from 'images/icons/LeftBtnIcon';
import RightToptBtnIcon from 'images/icons/RightToptBtnIcon';

import { NextArrow, PrevArrow } from './Slider/SliderCases'


import style from './Cases.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cases = () => {
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
    <section className={style.caseSection}>
      <div className={style.caseHeader}>
        <h2 className={style.caseTitle}>Successful cases of our company</h2>

        {width > 768 && <VerticalLine />}

        <div className={style.caseSwitchWrapper}>
          <div className={style.caseNum}>
            <span className={style.caseCurrentNum}>02 </span>
            <span className={style.caseAllNum}>/05</span>
          </div>
          <div className={style.switchBtnWrapper}>
          <PrevArrow />
          <NextArrow />
          </div>
        </div>
      </div>

      <SliderCases />
      {/* <SliderCases nextArrow={<NextArrow />} prevArrow={<PrevArrow />} /> */}
    </section>
  );
};

export default Cases;
