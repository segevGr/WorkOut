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
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: scaleFontSize(25),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    fontFamily: getFontFamily("NotoSansHebrew", "400"),
    textAlign: "right",
  },
  collapseContainer: {
    paddingHorizontal: horizontalScale(15),
  },
});

export default style;
