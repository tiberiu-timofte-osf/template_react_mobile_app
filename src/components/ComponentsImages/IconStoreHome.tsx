import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgComponentProps {
  width?: number;
  height?: number;
}

function SvgComponent({ width = 24, height = 24 }: SvgComponentProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M4.222 6h15.556L22 9.5V13H2V9.5L4.222 6zM10 13h10v7a1 1 0 01-1 1h-8a1 1 0 01-1-1v-7zM4 13v8M19 2H5"
        stroke="#262626"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
