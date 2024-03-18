import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import { scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  container: {
    marginBottom: verticalScale(24),
  },
  label: {
    fontFamily: getFontFamily("Heebo", "400"),
    color: Colors.darkBlueSecondary,
    fontSize: scaleFontSize(20),
    textAlign: "right",
  },
  input: {
    textAlign: "right",
    paddingVertical: verticalScale(5),
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputTransparent,
  },
});

export default style;
