import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import { scaleFontSize, verticalScale } from "../../assets/styles/scaling";

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
  optionText: {
    color: "#FFF",
    fontSize: scaleFontSize(28),
    fontFamily: getFontFamily("Manrope", "700"),
    marginBottom: verticalScale(40),
  },
  versionDetails: {
    color: "#FFF",
    textAlign: "center",
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily("Manrope", "400"),
    marginBottom: verticalScale(20),
  },
});

export default style;
