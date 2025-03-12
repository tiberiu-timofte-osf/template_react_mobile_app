import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={21}
      height={22}
      viewBox="0 0 21 22"
      fill="none"
    >
      <Path
        d="M1 15.3a.7.7 0 100 1.4v-1.4zM4 8h-.7.7zm14 0h.7-.7zm-5.27 12l.605.351a.7.7 0 00-.605-1.051v.7zm-3.46 0v-.7a.7.7 0 00-.605 1.051L9.27 20zM21 15.3H1v1.4h20v-1.4zM1 16.7A3.7 3.7 0 004.7 13H3.3A2.3 2.3 0 011 15.3v1.4zM4.7 13V8H3.3v5h1.4zm0-5A6.3 6.3 0 0111 1.7V.3A7.7 7.7 0 003.3 8h1.4zM11 1.7A6.3 6.3 0 0117.3 8h1.4A7.7 7.7 0 0011 .3v1.4zM17.3 8v5h1.4V8h-1.4zm0 5a3.7 3.7 0 003.7 3.7v-1.4a2.3 2.3 0 01-2.3-2.3h-1.4zm-5.176 6.649a1.3 1.3 0 01-1.124.648v1.4a2.7 2.7 0 002.335-1.346l-1.21-.702zM11 20.297a1.3 1.3 0 01-1.124-.648l-1.211.702A2.7 2.7 0 0011 21.697v-1.4zm-1.73.403h3.46v-1.4H9.27v1.4z"
        fill="#4B4B4B"
      />
    </Svg>
  );
}

export default SvgComponent;
