import { Dimensions } from "react-native";
// import DeviceInfo from "react-native-device-info";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

// const isSmall = width <= 375 && !DeviceInfo.hasNotch();
const isSmall = width <= 375;

const guidelineBaseWidth = () => (isSmall ? 330 : 350);

const horizontalScale = (size) => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => (isSmall ? 550 : width > 410 ? 620 : 680);

const verticalScale = (size) => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => (width > 410 ? 430 : 400);

const scaleFontSize = (size) =>
  Math.round((width / guidelineBaseFonts()) * size);

export { horizontalScale, verticalScale, scaleFontSize };
