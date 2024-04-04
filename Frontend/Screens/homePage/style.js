import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 100,
    marginBottom: verticalScale(40),
  },
  optionText: {
    color: Colors.white,
    fontSize: scaleFontSize(28),
    fontFamily: getFontFamily("NotoSansHebrew", "700"),
    paddingVertical: verticalScale(9),
    paddingHorizontal: horizontalScale(40),
  },
  versionDetails: {
    color: Colors.white,
    textAlign: "center",
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily("NotoSansHebrew", "300"),
    marginBottom: verticalScale(20),
  },
});

export default style;
