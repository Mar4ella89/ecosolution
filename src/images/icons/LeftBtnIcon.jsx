import * as React from 'react';

function LeftBtnIcon(props) {
  return (
    <svg
      width={66}
      height={66}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="-0.5"
        y="0.5"
        width="65"
        height="65"
        rx="32.5"
        transform="matrix(-1 0 0 1 65 0)"
        stroke={props.color}
      />
      <path
        d="M29.3542 23.8934L20.2492 32.9984L29.3542 42.1034"
        stroke="#173D33"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.749 32.9988H20.504"
        stroke="#173D33"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LeftBtnIcon;
