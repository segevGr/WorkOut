import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  optionContainer: {
    flexDirection: "column",
    height: verticalScale(190),
    marginHorizontal: horizontalScale(28),
    marginVertical: verticalScale(28),
    borderRadius: horizontalScale(10),
    borderColor: "#E5F0FA",
    borderWidth: horizontalScale(1.5),
    alignItems: "center",
  },
  workoutImage: {
    width: "100%",
    height: verticalScale(135),
    borderRadius: horizontalScale(10),
  },
  detailsContainer: {
    flex: 1,
    width: "100%",
    // paddingVertical: verticalScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  workoutDetails: {
    fontSize: scaleFontSize(30),
  },
});

export default style;
