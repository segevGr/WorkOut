import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  optionContainer: {
    flexDirection: "column",
    borderRadius: horizontalScale(10),
    borderColor: "#E5F0FA",
    borderWidth: horizontalScale(1.5),
    alignItems: "center",
  },
});

export default style;
