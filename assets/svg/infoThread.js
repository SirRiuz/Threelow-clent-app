import * as React from "react"
import Svg,{Path,Circle} from 'react-native-svg'


function InfoThread(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={9} stroke="#1D1A1A" strokeWidth={2} />
      <Circle cx={12} cy={18} r={0.5} fill="#1D1A1A" stroke="#1D1A1A" />
      <Path
        d="M12 16v-1.419c0-.944.604-1.782 1.5-2.081v0a2.194 2.194 0 001.5-2.081v-.513C15 8.3 13.7 7 12.094 7H12a3 3 0 00-3 3v0"
        stroke="#1D1A1A"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default InfoThread
