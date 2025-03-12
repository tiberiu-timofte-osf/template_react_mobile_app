import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M5.999 4h7.333M5.999 8h7.333m-7.333 4h7.333m-10-8v.007m0 3.993v.007m0 3.993v.007"
        stroke="#E10054"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
