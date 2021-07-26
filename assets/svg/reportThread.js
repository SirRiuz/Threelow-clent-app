import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'


function ReportThread(props) {
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
        d="M13.736 21.848a10.002 10.002 0 006.698-15.221 10 10 0 10-6.698 15.221h0z"
        stroke="#1D1A1A"
        strokeWidth={2}
      />
      <Path
        d="M12 12v6M12 7V6"
        stroke="#1D1A1A"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default ReportThread
