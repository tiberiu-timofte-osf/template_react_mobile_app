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
        d="M21.5 11l-10 10m10 0l-10-10"
        stroke="#9E0C0C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={16.5} cy={16} r={15.1} stroke="#9E0C0C" strokeWidth={1.8} />
    </Svg>
  );
}

export default SvgComponent;

