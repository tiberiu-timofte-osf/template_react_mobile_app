import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={22}
      height={21}
      viewBox="0 0 22 21"
      fill="none"
    >
      <Path
        d="M8 20v-7.4c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C8.76 11 9.04 11 9.6 11h2.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C14 11.76 14 12.04 14 12.6V20M1 8.5l9.04-6.78c.344-.258.516-.387.705-.437a1 1 0 01.51 0c.189.05.36.179.705.437L21 8.5M3 7v9.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 20 5.08 20 6.2 20h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C19 18.48 19 17.92 19 16.8V7l-6.08-4.56c-.688-.516-1.033-.775-1.41-.874a2 2 0 00-1.02 0c-.377.1-.721.358-1.41.874L3 7z"
        stroke="#E10054"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
