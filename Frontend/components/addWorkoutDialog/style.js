import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const style = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dialogContainer: {
    backgroundColor: "white",
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
    borderColor: "gray",
    borderWidth: horizontalScale(0.7),
    margin: horizontalScale(10),
    textAlign: "center",
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily("Heebo", "300"),
  },
  errorMsg: {
    color: "red",
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
