import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MyActions(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.543 3.704C18 4.807 18 6.204 18 9c0 2.796 0 4.194-.457 5.296a6 6 0 01-3.247 3.247C13.194 18 11.796 18 9 18H6c-2.828 0-4.243 0-5.121-.879C0 16.243 0 14.828 0 12V9c0-2.796 0-4.193.457-5.296A6 6 0 013.704.457C4.807 0 6.204 0 9 0c2.796 0 4.194 0 5.296.457a6 6 0 013.247 3.247zM5 7a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h3a1 1 0 010 2H6a1 1 0 01-1-1z"
        fill="#1D1A1A"
        fillOpacity={0.9}
      />
    </Svg>
  )
}

export default MyActions
