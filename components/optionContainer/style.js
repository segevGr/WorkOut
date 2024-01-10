import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  optionContainer: {
    flexDirection: "column",
    borderColor: "#E5F0FA",
    borderRadius: horizontalScale(10),
    borderWidth: horizontalScale(1.5),
  },
});

export default style;
