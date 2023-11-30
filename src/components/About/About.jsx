import React, { useState, useEffect } from 'react';

import VerticalLine from 'components/VerticalLine/VerticalLine';
import HorizontLine from 'components/HorizontLine/HorizontLine';
import MaximizeCircle from 'images/icons/MaximizeCircle';
import GlobalIcon from 'images/icons/GlobalIcon';
import CpuIcon from 'images/icons/CpuIcon';

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
        <li className={style.aboutItem}>
          <div className={style.aboutValueTitleWrapper}>
            <MaximizeCircle />
            <h3 className={style.aboutValueTitle}>Openness</h3>
          </div>
          <HorizontLine />
          <p className={style.aboutValueText}>
            to the world, people, new ideas and projects
          </p>
        </li>
        <li className={style.aboutItem}>
          <div className={style.aboutValueTitleWrapper}>
            <GlobalIcon />
            <h3 className={style.aboutValueTitle}>Responsibility</h3>
          </div>
          <HorizontLine />
          <p className={style.aboutValueText}>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </li>
        <li className={style.aboutItem}>
          <div className={style.aboutValueTitleWrapper}>
            <CpuIcon />
            <h3 className={style.aboutValueTitle}>Innovation</h3>
          </div>
          <HorizontLine />
          <p className={style.aboutValueText}>
            we use the latest technology to implement non-standard solutions
          </p>
        </li>
        <li className={style.aboutItem}>
          <h3 className={style.aboutValueTitle}>Quality</h3>
          <HorizontLine />
          <p className={style.aboutValueText}>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </li>
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
