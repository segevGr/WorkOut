import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

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
    fontFamily: "Manrope-Bold",
  },
});

export default style;
