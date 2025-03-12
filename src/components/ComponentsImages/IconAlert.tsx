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
        clipRule="evenodd"
        d="M14.221 5.147L2.928 24a2.667 2.667 0 002.28 4h22.586a2.667 2.667 0 002.28-4L18.781 5.147a2.667 2.667 0 00-4.56 0z"
        stroke="#A88300"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 12v6.667"
        stroke="#A88300"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={16.5008} cy={23.2} r={1.2} fill="#A88300" />
    </Svg>
  );
}

export default SvgComponent;

