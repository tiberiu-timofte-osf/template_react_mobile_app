import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgComponentProps {
  strokeColor: string;
}

function SvgComponent({ strokeColor }: SvgComponentProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M2 5.333h4M11.333 5.333H14M2 10.667h2.666M10 10.667h4"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.834 5.333a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10.166 10.667a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        stroke={strokeColor}
      />
    </Svg>
  );
}

export default SvgComponent;
