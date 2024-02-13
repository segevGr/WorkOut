import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import { scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    marginBottom: verticalScale(24),
  },
  label: {
    fontFamily: getFontFamily("Heebo", "400"),
    color: "#36455A",
    fontSize: scaleFontSize(20),
    textAlign: "right",
  },
  input: {
    textAlign: "right",
    paddingVertical: verticalScale(5),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(167, 167, 167, 0.5)",
  },
});

export default style;
