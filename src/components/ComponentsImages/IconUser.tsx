import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M1 10a9 9 0 1018.001 0A9 9 0 001 10z"
        stroke="#262626"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.168 16.849A4 4 0 018 14h4a4 4 0 013.834 2.855M7 8a3 3 0 106 0 3 3 0 00-6 0z"
        stroke="#262626"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;

