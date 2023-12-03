import * as React from 'react';

function RightBtnIcon(props) {
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
        x="0.5"
        y="0.5"
        width="64"
        height="65"
        rx="32.5"
        transform="matrix(-1 0 0 1 65 0)"
        stroke={props.color}
      />
      <path
        d="M36.6458 23.8934L45.7508 32.9984L36.6458 42.1034"
        stroke="#173D33"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.251 32.9988H45.496"
        stroke="#173D33"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightBtnIcon;
