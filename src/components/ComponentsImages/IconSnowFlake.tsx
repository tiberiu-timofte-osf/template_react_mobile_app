import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G
        clipPath="url(#clip0_2505_1465)"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.666 2.667l1.333.666 1.334-.666" />
        <Path d="M8 1.333v4.334l2 1.146M11.951 4.179l.09 1.488 1.243.821" />
        <Path d="M13.774 4.667l-3.752 2.166.006 2.306M13.284 9.512l-1.244.821-.089 1.488" />
        <Path d="M13.773 11.333l-3.752-2.166-1.994 1.158M9.333 13.333l-1.334-.666-1.333.666" />
        <Path d="M8 14.667v-4.334L6 9.187M4.048 11.821l-.09-1.488-1.243-.821" />
        <Path d="M2.227 11.333l3.752-2.166-.006-2.306M2.715 6.488l1.244-.821.09-1.488" />
        <Path d="M2.227 4.667l3.752 2.166 1.994-1.158" />
      </G>
      <Defs>
        <ClipPath id="clip0_2505_1465">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
