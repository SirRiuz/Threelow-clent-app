import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'

function BackIcon(props) {
  return (
    <Svg
      width={29}
      height={45}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.125 13.5l-.884-.884-.884.884.884.884.884-.884zm5.866-7.634l-6.75 6.75 1.768 1.768 6.75-6.75-1.768-1.768zm-6.75 8.518l6.75 6.75 1.768-1.768-6.75-6.75-1.768 1.768z"
        fill={props.color}
      />
    </Svg>
  )
}

export default BackIcon
