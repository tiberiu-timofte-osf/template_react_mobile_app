import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M12 16v.01M12 13a2 2 0 10-.377-3.961A1.98 1.98 0 0010.5 9.7M3 12a9 9 0 1018.001 0A9 9 0 003 12z"
        stroke="#262626"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;

