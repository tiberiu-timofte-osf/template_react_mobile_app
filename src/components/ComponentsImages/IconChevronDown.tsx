import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgComponentProps {
  width?: number;
  height?: number;
}

function SvgComponent({ width = 16, height = 16 }: SvgComponentProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M4 6l4 4 4-4"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
