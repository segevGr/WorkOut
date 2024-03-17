import { Alert } from "react-native";

import Strings from "../assets/strings/Strings";

export default showAlert = ({
  title,
  message,
  btnText,
  pressFunc,
  cancelText,
}) => {
  Alert.alert(title, message, buttonsArray(btnText, pressFunc, cancelText));
};

const buttonsArray = (btnText, pressFunc, cancelText) => {
  const arr = [
    {
      text: btnText,
      onPress: pressFunc,
      style: "default",
    },
  ];
  if (cancelText)
    arr.unshift({
      text: cancelText,
      onPress: () => null,
      style: "default",
    });
  return arr;
};

export const somethingWrongAlert = () => {
  showAlert({
    title: Strings.SomethingWrong,
    message: Strings.SomethingWrongSummery,
    btnText: Strings.Submit,
    pressFunc: null,
  });
};
