import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  videoContainer: {
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(5),
  },
  video: {
    width: "100%",
    height: verticalScale(130),
    borderRadius: horizontalScale(10),
    paddingBottom: 0,
  },
});

export default style;
