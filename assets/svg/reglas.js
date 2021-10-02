import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Reglas(props) {
  return (
    <Svg
      width={24}
      height={30}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2v5.054c0 .424 0 .837.046 1.177.051.383.177.82.54 1.183.363.363.8.489 1.184.54.34.046.752.046 1.176.046H20v6c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h2zm2 .005V7c0 .5.002.774.028.964v.007l.008.001c.19.026.464.028.964.028h4.995c-.01-.412-.043-.684-.147-.937-.152-.367-.441-.657-1.02-1.235l-2.656-2.656c-.579-.578-.867-.868-1.235-1.02-.253-.105-.525-.137-.937-.147zM8 13a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2H9z"
          fill="#1D1A1A"
          fillOpacity={0.9}
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default Reglas
