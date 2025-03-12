import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={130}
      height={100}
      viewBox="0 0 130 100"
      fill="none"
    >
      <Rect
        y={9.87402}
        width={118.21}
        height={105.091}
        rx={8}
        transform="rotate(-17.159 0 9.874)"
        fill="#2F49EA"
      />
    </Svg>
  );
}

export default SvgComponent;
