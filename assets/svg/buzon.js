import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Buzon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.879 5.879C3 6.757 3 8.172 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-2.828 0-4.243-.879-5.121C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879zm2.676 2.289a1 1 0 00-1.11 1.664l5.446 3.63a2 2 0 002.218 0l5.446-3.63a1 1 0 00-1.11-1.664L12 11.798l-5.445-3.63z"
        fill="#1D1A1A"
        fillOpacity={0.9}
      />
    </Svg>
  )
}

export default Buzon
