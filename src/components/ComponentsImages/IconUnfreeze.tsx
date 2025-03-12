import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <G
        clipPath="url(#clip0_3314_4337)"
        stroke="#E10054"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.5 4l2 1 2-1M12.5 2v6m1.196 1.186L15.5 10.22M18.43 6.268l.134 2.232 1.866 1.232" />
        <Path d="M21.16 7l-5.629 3.25-.031.75M20.43 14.268l-1.016.67M14.71 14.226l-2.17 1.262M14.5 20l-2-1-2 1" />
        <Path d="M12.5 22v-6.5l-3-1.72M6.57 17.732L6.436 15.5 4.57 14.268" />
        <Path d="M3.84 17l5.629-3.25-.01-3.458M4.57 9.732L6.436 8.5l.134-2.232" />
        <Path d="M3.84 7l5.629 3.25.802-.466M3.5 3l18 18" />
      </G>
      <Defs>
        <ClipPath id="clip0_3314_4337">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
