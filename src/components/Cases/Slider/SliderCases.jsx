import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HorizontLine from 'components/HorizontLine/HorizontLine';
import RightBtnIcon from 'images/icons/RightBtnIcon';
import LeftBtnIcon from 'images/icons/LeftBtnIcon';
import RightToptBtnIcon from 'images/icons/RightToptBtnIcon';

import style from './SliderCases.module.scss';

const images = [
  'landscape-with-solar-panels.jpg',
  'landscape-with-windmills-1.jpg',
  'landscape-with-windmills.jpg',
  'power-plant-1.jpg',
  'power-plant.jpg',
];

// export const NextArrow = () => (
//   <button
//     type="button"
//     className={`${style.switchBtn} ${style.switchBtnRight}`}
//     // onClick={onClick}
//   >
//     <RightBtnIcon color={'#173D33'} />
//   </button>
// );

// export const PrevArrow = (onClick) => (
//   <button type="button" className={style.switchBtn} 
//   onClick={sliderRef?.slickPrev}
//   >
//     <LeftBtnIcon color={'#173D33'} />
//   </button>
// );

function SliderCases() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <button
    type="button"
    className={`${style.switchBtn} ${style.switchBtnRight}`}
    onClick={sliderRef?.slickNext}
  >
    <RightBtnIcon color={'#173D33'} />
  </button>
  <button onCLick={sliderRef?.slickNext}>
        <LeftBtnIcon />
  </button>
      {/* <PrevArrow /> */}
      {/* <NextArrow /> */}
      <div className={style.caseSwitchWrapper}>
        <div className={style.caseNum}>
          <span className={style.caseCurrentNum}>
            {(currentSlide + 1).toString().padStart(2, '0')}{' '}
          </span>

          <span className={style.caseAllNum}>
            /{images.length.toString().padStart(2, '0')}
          </span>
        </div>
        <div className={style.switchBtnWrapper}>
          {/* <button type="button" className={style.switchBtn}>
            <LeftBtnIcon color={'#173D33'} />
          </button>
          <button
            type="button"
            className={`${style.switchBtn} ${style.switchBtnRight}`}
          >
            <RightBtnIcon color={'#173D33'} />
          </button> */}
        </div>
      </div>

      <ul className={style.list}>
        <Slider ref={setSliderRef} {...settings}>
          {images.map((image, index) => (
            <li key={index} className={style.item}>
              <img
                className={style.image}
                src={`${process.env.PUBLIC_URL}/casesImg/${image}`}
                alt={`Slide ${index + 1}`}
                // src="casesImg/landscape-with-windmills.jpg"
                // alt="landscape with windmills"
                width="320"
              />
              <div className={style.infoWrapper}>
                <div className={style.subTitleWrapper}>
                  <div className={style.subTitle}>
                    <p>Lviv Region, Radekhiv town</p>
                    <p>Private Enterprise “ZAKHIDNYI BUH”</p>
                  </div>

                  <button type="button" className={style.moreBtn}>
                    <RightToptBtnIcon fill={'#97D28B'} />
                  </button>
                </div>
                <HorizontLine />
                <div className={style.text}>
                  <p>Wind Power for auto field irrigation</p>
                  <p className={style.textDate}>July 2023</p>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
}

export default SliderCases;
