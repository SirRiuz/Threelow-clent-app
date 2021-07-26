import * as React from "react"
import Svg,{Path} from 'react-native-svg'


function DrawMenuIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.625 7.875h15.75M5.625 13.5h11.25M5.625 19.125h6.75"
        stroke="#060606"
        strokeOpacity={0.75}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default DrawMenuIcon
