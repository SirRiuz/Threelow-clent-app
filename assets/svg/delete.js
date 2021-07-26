import * as React from "react"
import Svg,{Path,Circle,Ellipse} from 'react-native-svg'


function DeleteIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse
        cx={14}
        cy={8.167}
        rx={8.167}
        ry={3.5}
        stroke="#1D1A1A"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M5.833 8.167l2.33 12.809c.002.015.01.03.021.041v0a8.225 8.225 0 0011.632 0v0a.079.079 0 00.022-.041l2.329-12.81"
        stroke="#1D1A1A"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default DeleteIcon
