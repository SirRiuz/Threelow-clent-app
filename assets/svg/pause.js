
import Svg,{Rect,Circle} from 'react-native-svg'
import * as React from "react"


function PauseIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={6} y={5} width={4} height={14} rx={1} fill="#fff" />
      <Rect x={14} y={5} width={4} height={14} rx={1} fill="#fff" />
    </Svg>
  )
}

export default PauseIcon
