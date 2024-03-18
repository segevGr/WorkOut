import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: horizontalScale(24),
  },
  welcomeHeader: {
    fontFamily: getFontFamily("Heebo", "600"),
    textAlign: "right",
    fontSize: scaleFontSize(40),
    marginBottom: verticalScale(30),
  },
  inputsContainer: {
    marginBottom: verticalScale(17),
  },
  loginBtn: {
    justifyContent: "center",
    backgroundColor: Colors.submitButton,
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
    marginBottom: verticalScale(24),
  },
  disabled: {
    opacity: 0.5,
  },
  loginBtnText: {
    fontFamily: getFontFamily("Heebo", "500"),
    fontSize: scaleFontSize(20),
    textAlign: "center",
    color: Colors.black,
  },
});

export default style;
