import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'


function CloseWite(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 6L6 18M6 6l12 12"
        stroke="#fff"
        strokeWidth={2.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CloseWite
