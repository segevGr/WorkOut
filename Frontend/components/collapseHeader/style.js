import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const style = StyleSheet.create({
  containerView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exerciseTitle: {
    fontSize: scaleFontSize(25),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    fontFamily: getFontFamily("Manrope", "500"),
  },
  collapseContainer: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
});

export default style;
