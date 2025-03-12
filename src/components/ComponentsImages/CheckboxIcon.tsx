import * as React from "react"
import Svg, { Path } from "react-native-svg"
function SvgComponent() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M13.334 4.667L6 12 2.667 8.666"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export default SvgComponent