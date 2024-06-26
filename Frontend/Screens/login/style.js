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
  image: {
    width: "100%",
    height: "100%",
  },
  blackOpacity: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.6,
  },
  contentContainer: {
    flex: 2,
    backgroundColor: Colors.opacityBlack,
    alignItems: "center",
    paddingBottom: 30,
  },
  welcomeHeader: {
    fontFamily: getFontFamily("NotoSansHebrew", "700"),
    textAlign: "right",
    fontSize: scaleFontSize(40),
    marginTop: verticalScale(10),
    color: Colors.white,
  },
  loginBtn: {
    justifyContent: "center",
    backgroundColor: Colors.submitPurple,
  },
  disabled: {
    opacity: 0.5,
  },
  loginBtnText: {
    fontFamily: getFontFamily("NotoSansHebrew", "700"),
    fontSize: scaleFontSize(20),
    textAlign: "center",
    color: Colors.black,
  },
  itemContainer: {
    width: horizontalScale(250),
    height: verticalScale(40),
    borderRadius: horizontalScale(20),
    marginVertical: verticalScale(20),
  },
  input: {
    textAlign: "right",
    fontFamily: getFontFamily("NotoSansHebrew", "500"),
    fontSize: scaleFontSize(14),
    color: Colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    borderWidth: 1,
    borderColor: Colors.opacityGray,
  },
});

export default style;
