import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const style = StyleSheet.create({
  innerContainer: {
    alignItems: "flex-end",
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(5),
    paddingBottom: verticalScale(5),
    paddingHorizontal: horizontalScale(5),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: verticalScale(3),
  },
  textsTitle: {
    textAlign: "right",
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily("NotoSansHebrew", "600"),
  },
  contentContainer: {
    width: "100%",
  },
  content: {
    textAlign: "right",
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily("NotoSansHebrew", "400"),
  },
});

export default style;
