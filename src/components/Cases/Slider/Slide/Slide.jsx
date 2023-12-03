import React from "react";
import SlideTitle from "./SlideTitle/SlideTitle";
import SlideImage from "./SlideImage/SlideImage";

import style from './Slide.module.scss';


const Slide = ({ data: { url, title }, animation }) => {
  return (
    <div className={`slide ${animation && 'fadeInAnimation'}`}>
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
}

export default Slide