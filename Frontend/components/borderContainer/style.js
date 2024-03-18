import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import Colors from "../../assets/styles/Colors";

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderColor: Colors.lightBluePrimary,
    borderRadius: horizontalScale(10),
    borderWidth: horizontalScale(1.5),
  },
  default: {
    marginHorizontal: horizontalScale(28),
    marginVertical: verticalScale(10),
  },
});

export default style;
