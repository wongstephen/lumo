import React from 'react';

import styles from './Icons.module.css';

const variants = {
  up: styles['rotate-270'],
  down: styles['rotate-90'],
  left: styles['rotate-180'],
  right: styles['rotate-0'],
};

type IconProps = {
  variant?: keyof typeof variants;
} & React.SVGProps<SVGSVGElement>;

function ArrowIcon({
  variant = 'right',
  className,
}: IconProps): React.JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${variants[variant]} ${className} `}
    >
      <path
        d="M8.84375 2.00195L14.8438 8.00195L8.84375 14.002"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <path
        d="M15 8L0 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

ArrowIcon.displayName = 'ArrowIcon';

export default ArrowIcon;
