import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  TipContainer: {
    backgroundColor: "#FFF",
    padding: horizontalScale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: horizontalScale(60),
    width: horizontalScale(60),
    backgroundColor: "#F6FAFD",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    gap: horizontalScale(5),
    alignItems: "flex-end",
  },
  primaryText: {
    fontFamily: getFontFamily("Manrope", "700"),
    fontSize: scaleFontSize(25),
  },
  secondaryText: {
    color: "#4A6375",
    fontFamily: getFontFamily("Manrope", "400"),
    fontSize: scaleFontSize(16),
  },
});

export default style;
