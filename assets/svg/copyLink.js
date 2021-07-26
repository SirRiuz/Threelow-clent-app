import * as React from "react"
import Svg,{Path} from 'react-native-svg'


function CopyLink(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.667 18.667h-3.5A4.667 4.667 0 013.5 14v0a4.667 4.667 0 014.667-4.667h3.5M18.667 14H9.333M16.333 18.667h3.5A4.667 4.667 0 0024.5 14v0a4.667 4.667 0 00-4.667-4.667h-3.5"
        stroke="#1D1A1A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CopyLink
