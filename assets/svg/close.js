
import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'



function Close(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 6L6 18M6 6l12 12"
        stroke="#000"
        strokeOpacity={0.8}
        strokeWidth={2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Close
