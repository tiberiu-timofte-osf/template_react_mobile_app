import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M8 4H4a1.333 1.333 0 00-1.334 1.333V12a1.333 1.333 0 001.333 1.333h6.667A1.333 1.333 0 0011.999 12V8m-4.666.667l6-6m0 0H9.999m3.334 0V6"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
