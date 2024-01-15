import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const style = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "transparent",
  },
  headerItemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: verticalScale(20),
  },
  backButtonContainer: {
    marginLeft: horizontalScale(28),
    padding: horizontalScale(5),
  },
  title: {
    fontSize: scaleFontSize(25),
    padding: horizontalScale(5),
    fontFamily: getFontFamily("Montserrat", "700"),
  },
  optionsButtonContainer: {
    marginRight: horizontalScale(28),
    padding: horizontalScale(5),
  },
  divider: {
    height: verticalScale(2),
    backgroundColor: "#E5F0FA",
  },
});

export default style;
