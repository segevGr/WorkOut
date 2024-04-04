import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  categoryContainer: {
    backgroundColor: Colors.white,
    padding: horizontalScale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    height: horizontalScale(60),
    width: horizontalScale(60),
    backgroundColor: Colors.lightBlueSecondary,
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
    fontFamily: getFontFamily("NotoSansHebrew", "700"),
    fontSize: scaleFontSize(25),
  },
  secondaryText: {
    color: Colors.darkBluePrimary,
    fontFamily: getFontFamily("NotoSansHebrew", "400"),
    fontSize: scaleFontSize(16),
  },
});

export default style;
