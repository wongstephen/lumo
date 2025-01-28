import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

function DownloadIcon({ className }: IconProps): React.JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.998 6.84375L7.99805 12.8437L1.99805 6.84375"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <path
        d="M8 13L8 1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <line
        x1="1"
        y1="15.4"
        x2="15"
        y2="15.4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

DownloadIcon.displayName = 'DownloadIcon';

export default DownloadIcon;
