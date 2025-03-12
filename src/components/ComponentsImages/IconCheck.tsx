import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  viewBox?: string;
}

const IconCheck: React.FC<IconProps> = ({ viewBox = "0 0 16 16" }) => (
  <Svg
    width={16}
    height={16}
    viewBox={viewBox}
    fill="none"
  >
    <Path
      d="M13.334 4.667L6 12 2.667 8.666"
      stroke="#380"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconCheck;
