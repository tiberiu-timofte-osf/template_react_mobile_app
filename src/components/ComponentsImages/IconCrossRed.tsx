import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  viewBox?: string;
}

const IconCrossRed: React.FC<IconProps> = ({ viewBox = "0 0 16 16" }) => (
  <Svg
    width={16}
    height={16}
    viewBox={viewBox}
    fill="none"
  >
    <Path
      d="M4 4L12 12M12 4L4 12"
      stroke="#9E0C0C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconCrossRed;

