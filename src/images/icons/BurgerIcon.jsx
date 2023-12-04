import * as React from 'react';

function BurgerIcon(props) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 5.16699H14" stroke="#292D32" strokeLinecap="round" />
      <path d="M2 8.5H14" stroke="#292D32" strokeLinecap="round" />
      <path d="M2 11.833H14" stroke="#292D32" strokeLinecap="round" />
    </svg>
  );
}

export default BurgerIcon;