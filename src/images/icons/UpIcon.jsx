import * as React from 'react';

function UpIcon(props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y="32"
        width="32"
        height="32"
        rx="16"
        transform="rotate(-90 0 32)"
        fill="#97D28B"
      />
      <path
        d="M11.9531 14.38L15.9998 10.3333L20.0465 14.38"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 21.6666L16 10.4466"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UpIcon;
