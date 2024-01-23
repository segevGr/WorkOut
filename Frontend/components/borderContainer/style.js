import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderColor: "#E5F0FA",
    borderRadius: horizontalScale(10),
    borderWidth: horizontalScale(1.5),
  },
  default: {
    marginHorizontal: horizontalScale(28),
    marginVertical: verticalScale(10),
  },
});

export default style;