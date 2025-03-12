import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Rect
        x={2}
        y={2}
        width={4.90909}
        height={4.90909}
        rx={0.5}
        stroke="#E10054"
      />
      <Rect
        x={9.08984}
        y={2}
        width={4.90909}
        height={4.90909}
        rx={0.5}
        stroke="#E10054"
      />
      <Rect
        x={9.08984}
        y={9.09082}
        width={4.90909}
        height={4.90909}
        rx={0.5}
        stroke="#E10054"
      />
      <Rect
        x={2}
        y={9.09082}
        width={4.90909}
        height={4.90909}
        rx={0.5}
        stroke="#E10054"
      />
    </Svg>
  );
}

export default SvgComponent;
