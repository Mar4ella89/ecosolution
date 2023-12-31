import * as React from 'react';

function RightIcon(props) {
  return (
    <svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="0.5" width="32" height="32" rx="16" fill={props.fill} stroke={props.color} />
      <path
        d="M17.6201 12.4531L21.6668 16.4998L17.6201 20.5465"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3335 16.5H21.5535"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightIcon;
