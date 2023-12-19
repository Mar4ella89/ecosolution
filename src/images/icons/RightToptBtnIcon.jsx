import * as React from 'react';

function RightToptBtnIcon(props) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="60" height="60" rx="30" fill={props.fill} />
      <path
        d="M26.9976 22.9867L37.0125 22.9867L37.0125 33.0017"
        stroke="#173D33"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.989 37.0109L36.8731 23.1269"
        stroke="#173D33"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightToptBtnIcon;
