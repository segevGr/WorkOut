import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(5),
  },
  media: {
    width: "100%",
    height: verticalScale(130),
    borderRadius: horizontalScale(10),
    paddingBottom: 0,
  },
});

export default style;
