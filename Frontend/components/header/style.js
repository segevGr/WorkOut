import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: Colors.transparent,
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
    fontSize: scaleFontSize(23),
    padding: horizontalScale(5),
    fontFamily: getFontFamily("Heebo", "700"),
  },
  optionsButtonContainer: {
    marginRight: horizontalScale(28),
    padding: horizontalScale(5),
  },
  divider: {
    height: verticalScale(2),
    backgroundColor: Colors.lightBluePrimary,
  },
});

export default style;
