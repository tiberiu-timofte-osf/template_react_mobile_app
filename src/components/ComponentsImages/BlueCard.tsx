import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
    >
      <G
        clipPath="url(#clip0_950_9553)"
        stroke="#2F49EA"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M5 24.286c0-3.126 1.23-6.124 3.417-8.334a11.607 11.607 0 018.25-3.452h46.666c3.094 0 6.062 1.242 8.25 3.452A11.847 11.847 0 0175 24.286v31.428c0 3.126-1.23 6.124-3.417 8.334a11.607 11.607 0 01-8.25 3.452H16.667a11.607 11.607 0 01-8.25-3.452A11.847 11.847 0 015 55.714V24.286z"
          fill="#F5F6FA"
        />
        <Path d="M23.334 53.333l10-10 10 10M26.667 43.333c-2.63 0-6.667-2.24-6.667-5s2.37-5 5-5c3.76-.066 6.923 3.9 8.333 10 1.41-6.1 4.574-10.066 8.334-10 2.63 0 5 2.24 5 5s-4.037 5-6.667 5H26.667z" />
      </G>
      <Defs>
        <ClipPath id="clip0_950_9553">
          <Path fill="#fff" d="M0 0H80V80H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;

