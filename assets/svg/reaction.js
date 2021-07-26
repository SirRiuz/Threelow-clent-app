import * as React from "react"
import Svg,{Path,Circle,Rect} from 'react-native-svg'

function ReactionIconSvg(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke="#212121"
        opacity={0.7}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <Path
        d="M9.402 13.5a3 3 0 005.196 0"
        stroke="#212121"
        strokeWidth={1.8}
        opacity={0.7}
        strokeLinecap="round"
      />
      <Rect
        x={6.875}
        y={7.875}
        width={3.25}
        height={2.25}
        rx={1.125}
        fill="#212121"
        stroke="black"
        opacity={0.7}
        strokeWidth={0}
        strokeLinecap="round"
      />
      <Rect
        x={13.875}
        y={7.875}
        width={3.25}
        height={2.25}
        rx={1.125}
        opacity={0.7}
        fill="#212121"
        stroke="black"
        strokeWidth={0}
        strokeLinecap="round"
      />
    </Svg>

  )
}

export default ReactionIconSvg
