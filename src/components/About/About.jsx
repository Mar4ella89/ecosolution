import React, { useState, useEffect } from 'react';

import VerticalLine from 'components/VerticalLine/VerticalLine';
import HorizontLine from 'components/HorizontLine/HorizontLine';
import MaximizeCircle from 'images/icons/MaximizeCircle';
import GlobalIcon from 'images/icons/GlobalIcon';
import CpuIcon from 'images/icons/CpuIcon';
import Quality from 'images/icons/Quality';

import aboutTab from 'images/jpg/aboutImg/wind-power-plant-tab.jpg';
import aboutTab2x from 'images/jpg/aboutImg/wind-power-plant-tab-2x.jpg';
import aboutTabWebp from 'images/jpg/aboutImg/wind-power-plant-tab.webp';
import aboutTabWebp2x from 'images/jpg/aboutImg/wind-power-plant-tab-2x.webp';

import aboutDesk from 'images/jpg/aboutImg/wind-power-plant-desk.jpg';
import aboutDesk2x from 'images/jpg/aboutImg/wind-power-plant-desk-2x.jpg';
import aboutDeskWebp from 'images/jpg/aboutImg/wind-power-plant-desk.webp';
import aboutDeskWebp2x from 'images/jpg/aboutImg/wind-power-plant-desk-2x.webp';

import aboutImgTab from 'images/jpg/aboutImg/sun-panel-tab.jpg';
import aboutImgTab2x from 'images/jpg/aboutImg/sun-panel-tab-2x.jpg';
import aboutImgTabWebp from 'images/jpg/aboutImg/sun-panel-tab.webp';
import aboutImgTabWebp2x from 'images/jpg/aboutImg/sun-panel-tab-2x.webp';

import aboutImgDesk from 'images/jpg/aboutImg/sun-panel-desk.jpg';
import aboutImgDesk2x from 'images/jpg/aboutImg/sun-panel-desk-2x.jpg';
import aboutImgDeskWebp from 'images/jpg/aboutImg/sun-panel-desk.webp';
import aboutImgDeskWebp2x from 'images/jpg/aboutImg/sun-panel-desk-2x.webp';

import style from './About.module.scss';

const About = () => {
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
    <section className={style.about}>
      <div className={style.aboutTitlteWrapper}>
        <h2 className={style.aboutTitlte}>Main values of our company</h2>

        {width > 768 && <VerticalLine />}

        <p className={style.aboutText}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>

      <ul className={style.aboutList}>
        <li className={`${style.aboutItem} ${style.aboutItemFirst}`}>
          <div className={style.aboutValueTitleWrapper}>
            <MaximizeCircle
              width={width > 1279 ? 24 : 16}
              height={width > 1279 ? 24 : 16}
            />
            <h3 className={style.aboutValueTitle}>Openness</h3>
          </div>
          <HorizontLine />
          <p className={style.aboutValueText}>
            to the world, people, new ideas and projects
          </p>
        </li>
        <li className={`${style.aboutItem} ${style.aboutItemSecond}`}>
          <div className={style.aboutValueTitleWrapper}>
            <GlobalIcon
              width={width > 1279 ? 24 : 16}
              height={width > 1279 ? 24 : 16}
            />
            <h3 className={style.aboutValueTitle}>Responsibility</h3>
          </div>
          <HorizontLine />
          <p className={style.aboutValueText}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </li>
        <li className={`${style.aboutItem} ${style.aboutItemThird}`}>
          <div className={style.aboutValueTitleWrapper}>
            <CpuIcon
              width={width > 1279 ? 24 : 16}
              height={width > 1279 ? 24 : 16}
            />
            <h3 className={style.aboutValueTitle}>Innovation</h3>
          </div>
          <HorizontLine />
          <p className={style.aboutValueText}>
            we use the latest technology to implement non-standard solutions
          </p>
        </li>
        <li className={`${style.aboutItem} ${style.aboutItemFourth}`}>
          <div className={style.aboutValueTitleWrapper}>
            <Quality
              width={width > 1279 ? 24 : 16}
              height={width > 1279 ? 24 : 16}
            />
            <h3 className={style.aboutValueTitle}>Quality</h3>
          </div>
          <HorizontLine />
          <p className={style.aboutValueText}>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </li>
        {width > 768 && (
          <>
            <li className={`${style.aboutItem} ${style.aboutItemImgFirst}`}>
              <picture>
                <source
                  srcSet={`${aboutDeskWebp} 1x, ${aboutDeskWebp2x} 2x`}
                  media="(min-width: 1280px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${aboutDesk} 1x, ${aboutDesk2x} 2x`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`${aboutTabWebp} 1x, ${aboutTabWebp2x} 2x`}
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${aboutTab} 1x, ${aboutTab2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  src={aboutTab}
                  alt="Generating power generation using energy wind"
                  width="342"
                  className={style.aboutImg}
                />
              </picture>
            </li>

            <li className={`${style.aboutItem} ${style.aboutItemImgSecond}`}>
              <picture>
                <source
                  srcSet={`${aboutImgDeskWebp} 1x, ${aboutImgDeskWebp2x} 2x`}
                  media="(min-width: 1280px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${aboutImgDesk} 1x, ${aboutImgDesk2x} 2x`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`${aboutImgTabWebp} 1x, ${aboutImgTabWebp2x} 2x`}
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${aboutImgTab} 1x, ${aboutImgTab2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  src={aboutImgTab}
                  alt="Generating power generation using energy sun"
                  width="342"
                  height="197"
                  className={style.aboutImg}
                />
              </picture>
            </li>
          </>
        )}
      </ul>

      {/* <div>
        <h3>Openness</h3>
        <p>to the world, people, new ideas and projects</p>
      </div>
      <div>
        <h3>Responsibility</h3>
        <p>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </p>
      </div>
      <div>
        <img />
      </div>
      <div>
        <h3>Innovation</h3>
        <p>we use the latest technology to implement non-standard solutions</p>
      </div>
      <div>
        <h3>Quality</h3>
        <p>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </p>
      </div>
      <div>
        <img />
      </div> */}
    </section>
  );
};

export default About;
