import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'


function SearchIcon(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={12.375}
        cy={12.375}
        r={7.875}
        stroke="#060606"
        strokeOpacity={0.75}
        strokeWidth={2.5}
      />
      <Path
        d="M22.5 22.5l-3.375-3.375"
        stroke="#060606"
        strokeOpacity={0.75}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SearchIcon
