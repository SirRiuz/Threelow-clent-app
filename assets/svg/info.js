import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'


function InfoIcon(props) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.164 20.938A9.582 9.582 0 109.837 2.064a9.582 9.582 0 003.327 18.874h0z"
        stroke={props.color}
        strokeWidth={2.2}
      />
      <Path
        d="M11.5 11.5v5.75M11.5 6.708V5.75"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default InfoIcon
