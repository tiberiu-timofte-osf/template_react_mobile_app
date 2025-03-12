import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
    >
      <Path
        d="M13.834 12h.013m5.32 0h.013M16.5 4a9.333 9.333 0 019.334 9.333v1.334h1.333a2.667 2.667 0 110 5.333h-1.333v4l2.666 4H15.167a8 8 0 01-8-7.7v-.301H5.834a2.667 2.667 0 010-5.334h1.333v-1.333A9.333 9.333 0 0116.5 4zm-1.333 14.667h2.667a1.333 1.333 0 00-2.667 0z"
        stroke="#2F49EA"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
