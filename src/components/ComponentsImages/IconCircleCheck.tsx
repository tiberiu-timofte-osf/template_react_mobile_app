import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
    >
      <Path
        d="M24.5 12l-11 11-5-5"
        stroke="#380"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={16.5} cy={16} r={15.1} stroke="#380" strokeWidth={1.8} />
    </Svg>
  );
}

export default SvgComponent;
