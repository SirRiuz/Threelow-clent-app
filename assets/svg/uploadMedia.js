
import Svg,{Path,Circle} from 'react-native-svg'
import * as React from "react"

function Media(props) {
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
        d="M3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-1"
        stroke="#000"
        strokeOpacity={0.6}
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 13.585l-.243-.243-.015-.014c-.064-.064-.117-.117-.164-.16a3 3 0 00-4.654.754c-.031.056-.065.124-.105.205l-.01.018-.028.057-.002.003-.003-.003-.04-.047-4.977-5.806a1 1 0 10-1.518 1.302l4.976 5.805.009.01a2 2 0 003.366-.414l.006-.012.075-.148a1 1 0 011.551-.252c.012.01.032.03.119.117l1.601 1.601c.046-.718.054-1.61.056-2.773z"
        fill="#000"
        fillOpacity={0.6}
      />
      <Circle cx={16.5} cy={7.5} r={1.5} fill="#000" fillOpacity={0.6} />
      <Path
        d="M8 16v-1h1v1H8zm-4.375 4.78a1 1 0 11-1.25-1.56l1.25 1.56zM7 21v-5h2v5H7zm1-4H3v-2h5v2zm.625-.22l-5 4-1.25-1.56 5-4 1.25 1.56z"
        fill="#000"
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default Media
