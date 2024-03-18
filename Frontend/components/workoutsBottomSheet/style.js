import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  itemContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(5),
  },
});

export default style;
