import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  blackOpacity: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.6,
  },
  contentContainer: {
    flex: 2,
    backgroundColor: Colors.opacityBlack,
    alignItems: "center",
  },
  welcomeHeader: {
    fontFamily: getFontFamily("Heebo", "600"),
    textAlign: "right",
    fontSize: scaleFontSize(40),
    marginTop: verticalScale(10),
    color: Colors.white,
  },
  fieldsContainer: {
    flex: 5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  loginBtn: {
    justifyContent: "center",
    backgroundColor: Colors.submitPurple,
    marginBottom: verticalScale(120),
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
  itemContainer: {
    width: horizontalScale(250),
    height: verticalScale(40),
    borderRadius: horizontalScale(20),
  },
});

export default style;
