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
    marginTop: verticalScale(40),
  },
  optionText: {
    color: "#FFF",
    fontSize: scaleFontSize(28),
    fontFamily: getFontFamily("Heebo", "500"),
    marginBottom: verticalScale(40),
  },
  versionDetails: {
    color: "#FFF",
    textAlign: "center",
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily("Heebo", "300"),
    marginBottom: verticalScale(20),
  },
});

export default style;
