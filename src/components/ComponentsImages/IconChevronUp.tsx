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
        d="M12 10L8 6l-4 4"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
