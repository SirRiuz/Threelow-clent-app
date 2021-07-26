import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'


function Trends(props) {
  var opacity = 0.9
  var fillOpacity = 0.8
  var fill = "#060606"

  if (!props.focus){
    opacity = 0.15
    fill = "#060606"
  }

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
        d="M17.813 18.75c0-1.484-1.974-1.877-2.498-.488-1.267 3.359-2.19 6.364-2.19 7.988a9.375 9.375 0 1018.75 0c0-1.745-1.065-5.084-2.478-8.743-1.83-4.74-2.745-7.11-3.874-7.238a1.924 1.924 0 00-1.078.2c-1.008.526-1.008 3.111-1.008 8.281a2.813 2.813 0 01-5.625 0z"
        fill={fill}
        fillOpacity={fillOpacity}
        opacity={opacity}
      />
    </Svg>
  )
}

export default Trends
