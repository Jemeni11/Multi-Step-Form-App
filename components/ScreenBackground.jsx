import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import Svg, { Defs, Path, G, Mask, Use, Ellipse } from "react-native-svg";

const SVGImageBackground = (props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ aspectRatio: 375 / 172, width: width, zIndex: -1 }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 375 172"
        {...props}
      >
        <Defs>
          <Path id="a" d="M0 0h375v172H0z" />
        </Defs>
        <G fill="none" fillRule="evenodd">
          <Mask id="b" fill="#fff">
            <Use xlinkHref="#a" />
          </Mask>
          <Use xlinkHref="#a" fill="#483EFF" />
          <G mask="url(#b)">
            <G transform="translate(-151.029 -133.957)">
              <Path
                fill="#6259FF"
                d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"
              />
              <Ellipse
                cx={129.864}
                cy={258.711}
                fill="#FFAF7E"
                rx={96.329}
                ry={96.373}
              />
              <Path
                fill="#F9818E"
                d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"
              />
              <Path
                d="m367.336 243.125 15.263-15.549m48.273 23.44-17.995-15.112m-13.517 35.847-9.94 21.293"
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth={5}
              />
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
};

export default SVGImageBackground;
