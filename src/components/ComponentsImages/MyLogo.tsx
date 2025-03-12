import * as React from 'react';
import Svg, { Text } from 'react-native-svg';

interface LogoProps {
  width?: string;
  height?: string;
}

const MyLogoSvg: React.FC<LogoProps> = ({
  width = '200',
  height = '50',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 50">
      <Text
        x="10"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="30"
        fill="#131640"
      >
        OSF Template
      </Text>
    </Svg>
  );
};

export default MyLogoSvg;
