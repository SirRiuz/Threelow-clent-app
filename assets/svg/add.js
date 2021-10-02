import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'


function Add(props) {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.5 11.25v22.5M33.75 22.5h-22.5"
        stroke={props.color}
        opacity={props.opacity}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Add
