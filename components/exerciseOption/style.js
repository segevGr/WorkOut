import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";

const style = StyleSheet.create({
  containerStyle: {
    marginHorizontal: horizontalScale(28),
    marginVertical: verticalScale(28),
  },
  detailsContainer: {
    flex: 1,
    // paddingVertical: verticalScale(20),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  setsContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "red",
  },
});

export default style;
