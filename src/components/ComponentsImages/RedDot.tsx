import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Rect x={1} y={1} width={10} height={10} rx={5} fill="#E10054" />
      <Rect
        x={1}
        y={1}
        width={10}
        height={10}
        rx={5}
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgComponent;
