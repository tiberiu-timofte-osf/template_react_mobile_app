import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgComponentProps {
  strokeColor: string;
}

function SvgComponent({ strokeColor }: SvgComponentProps) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M6 1.333v9.334M1.335 6h9.333"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;