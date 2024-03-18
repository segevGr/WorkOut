import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blackTransparent,
  },
  dialogContainer: {
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily("Heebo", "500"),
  },
  input: {
    height: verticalScale(25),
    width: horizontalScale(150),
    borderColor: Colors.grey,
    borderWidth: horizontalScale(0.7),
    margin: horizontalScale(10),
    textAlign: "center",
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily("Heebo", "300"),
  },
  errorMsg: {
    color: Colors.red,
    marginBottom: verticalScale(5),
    fontSize: scaleFontSize(15),
    fontFamily: getFontFamily("Heebo", "400"),
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default style;
