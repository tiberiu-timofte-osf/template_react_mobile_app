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
        d="M3 6h18"
        stroke="#262626"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.7 6a.7.7 0 10-1.4 0h1.4zm-14 0a.7.7 0 10-1.4 0h1.4zm1.6 0a.7.7 0 101.4 0H7.3zm8 0a.7.7 0 101.4 0h-1.4zm3 0v14h1.4V6h-1.4zm0 14a1.3 1.3 0 01-1.3 1.3v1.4a2.7 2.7 0 002.7-2.7h-1.4zM17 21.3H7v1.4h10v-1.4zm-10 0A1.3 1.3 0 015.7 20H4.3A2.7 2.7 0 007 22.7v-1.4zM5.7 20V6H4.3v14h1.4zm3-14V4H7.3v2h1.4zm0-2A1.3 1.3 0 0110 2.7V1.3A2.7 2.7 0 007.3 4h1.4zM10 2.7h4V1.3h-4v1.4zm4 0A1.3 1.3 0 0115.3 4h1.4A2.7 2.7 0 0014 1.3v1.4zM15.3 4v2h1.4V4h-1.4z"
        fill="#262626"
      />
      <Path
        d="M10 11v6M14 11v6"
        stroke="#262626"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
