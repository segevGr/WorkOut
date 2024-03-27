import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  input: {
    textAlign: "right",
    fontFamily: getFontFamily("Heebo", "400"),
    fontSize: scaleFontSize(16),
    color: Colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    borderWidth: 1,
    borderColor: Colors.opacityGray,
  },
});

export default style;
