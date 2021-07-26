
import Svg,{Rect,Path} from 'react-native-svg'
import * as React from "react"

function PlayIcon(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.138 10.569L9.605 7.303A1.8 1.8 0 007 8.913v6.175a1.8 1.8 0 002.605 1.61l6.533-3.267c1.18-.59 1.18-2.272 0-2.862z"
        fill="#fff"
      />
    </Svg>
  )
}

export default PlayIcon
