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
          d="M8 13.667V3M4 6.667l4-4 4 4"
          stroke="#2F49EA"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  export default SvgComponent;

