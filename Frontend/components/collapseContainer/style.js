import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  innerContainer: {
    alignItems: "flex-end",
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(5),
    paddingTop: verticalScale(3),
    paddingBottom: verticalScale(5),
    paddingRight: horizontalScale(5),
  },
  textsTitleStyle: {
    textAlign: "right",
    fontSize: scaleFontSize(22),
  },
  textsContentStyle: {
    textAlign: "right",
    fontSize: scaleFontSize(16),
  },
  notesContainer: { backgroundColor: "#F6FAFD" },
});

export default style;
