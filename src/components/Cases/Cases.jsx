import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';

import VerticalLine from 'components/VerticalLine/VerticalLine';
import HorizontLine from 'components/HorizontLine/HorizontLine';
import RightBtnIcon from 'images/icons/RightBtnIcon';
import LeftBtnIcon from 'images/icons/LeftBtnIcon';
import RightToptBtnIcon from 'images/icons/RightToptBtnIcon';

import dataSlides from './Slider/Slide/dataSlides';

import style from './Cases.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cases = () => {
  const [width, setWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

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

  const settings = {
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <section className={style.caseSection}>
      <div className={style.caseHeader}>
        <h2 className={style.caseTitle}>Successful cases of our company</h2>

        {width > 768 && <VerticalLine />}

        <div className={style.caseSwitchWrapper}>
          <div className={style.caseNum}>
            <span className={style.caseCurrentNum}>
              {(currentSlide + 1).toString().padStart(2, '0')}
            </span>

            <span className={style.caseAllNum}>
              /{dataSlides.length.toString().padStart(2, '0')}
            </span>
          </div>
          <div className={style.switchBtnWrapper}>
            <button
              type="button"
              className={style.switchBtn}
              onClick={sliderRef?.slickPrev}
            >
              <LeftBtnIcon color={'#173D33'} />
            </button>
            <button
              type="button"
              className={`${style.switchBtn} ${style.switchBtnRight}`}
              onClick={sliderRef?.slickNext}
            >
              <RightBtnIcon color={'#173D33'} />
            </button>
          </div>
        </div>

        <ul className={style.list}>
          <Slider ref={setSliderRef} {...settings}>
            {dataSlides.map(({id, srcImg, region, name, description, date}) => (
              <li key={id} className={style.item}>
                <img
                  className={style.image}
                  src={`${process.env.PUBLIC_URL}/casesImg/${srcImg}`}
                  alt={description}
                  width="320"
                />
                <div className={style.infoWrapper}>
                  <div className={style.subTitleWrapper}>
                    <div className={style.subTitle}>
                      <p>{region}</p>
                      <p>{name}</p>
                    </div>

                    <button type="button" className={style.moreBtn}>
                      <RightToptBtnIcon fill={'#97D28B'} />
                    </button>
                  </div>
                  <HorizontLine />
                  <div className={style.text}>
                    <p>{description}</p>
                    <p className={style.textDate}>{date}</p>
                  </div>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Cases;