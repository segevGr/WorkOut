import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { scaleFontSize, verticalScale } from "../assets/styles/scaling";
import { getFontFamily } from "../assets/fonts/getFontFamily";
import Strings from "../assets/strings/Strings";

const LoadingOverlay = ({ loadingText }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
      <Text style={styles.text}>{loadingText}</Text>
    </View>
  );
};

LoadingOverlay.defaultProps = {
  loadingText: Strings.LoadingGenericMessage,
};

LoadingOverlay.propTypes = {
  loadingText: PropTypes.string,
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  text: {
    marginTop: verticalScale(8),
    fontFamily: getFontFamily("Heebo", "400"),
    fontSize: scaleFontSize(18),
  },
});
