import Svg,{Path,Circle} from 'react-native-svg'
import * as React from "react"

function Time(props) {

  var opacity = 0.71
  var fill = "#060606"

  if (!props.focus){
    opacity = 0.15
  }

  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 30.625c7.249 0 13.125-5.876 13.125-13.125S24.749 4.375 17.5 4.375 4.375 10.251 4.375 17.5 10.251 30.625 17.5 30.625zm1-21.146a1 1 0 10-2 0v7.771c0 .69.56 1.25 1.25 1.25h4.854a1 1 0 100-2H18.5V9.48z"
        fill={fill}
        fillOpacity={opacity}
      />
    </Svg>
  )
}

export default Time
