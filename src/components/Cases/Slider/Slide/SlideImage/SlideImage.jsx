import React from "react";

import style from './SlideImage.module.scss';

const SlideImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="slide-image" />;
}

export default SlideImage