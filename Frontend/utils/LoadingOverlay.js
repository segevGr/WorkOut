import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { scaleFontSize, verticalScale } from "../assets/styles/scaling";
import { getFontFamily } from "../assets/fonts/getFontFamily";
import Strings from "../assets/strings/Strings";

const LoadingOverlay = ({ loadingText, customFont }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
      <Text style={[styles.text, { fontFamily: customFont }]}>
        {loadingText}
      </Text>
    </View>
  );
};

LoadingOverlay.defaultProps = {
  loadingText: Strings.LoadingGenericMessage,
  customFont: getFontFamily("NotoSansHebrew", "400"),
};

LoadingOverlay.propTypes = {
  loadingText: PropTypes.string,
  customFont: PropTypes.string,
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
    fontSize: scaleFontSize(18),
  },
});
