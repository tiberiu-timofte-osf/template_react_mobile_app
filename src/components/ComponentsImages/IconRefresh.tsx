import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M20.5 11A8.1 8.1 0 005 9m-.5-4v4h4m-4 4A8.1 8.1 0 0020 15m.5 4v-4h-4"
        stroke="#E10054"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
