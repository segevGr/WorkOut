import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const style = StyleSheet.create({
  workoutImage: {
    width: "100%",
    height: verticalScale(135),
    borderRadius: horizontalScale(10),
  },
  detailsContainer: {
    paddingVertical: verticalScale(20),
    alignItems: "center",
  },
  workoutDetails: {
    fontSize: scaleFontSize(30),
    fontFamily: getFontFamily("Manrope", "700"),
  },
});

export default style;
