import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

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
    fontFamily: "Manrope-Medium",
  },
  collapseContainer: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
});

export default style;
