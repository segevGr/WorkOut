import { Alert } from "react-native";

export default showAlert = ({
  title,
  message,
  btnText,
  pressFunc,
  cancelText,
}) => {
  Alert.alert(title, message, btnsArray(btnText, pressFunc, cancelText));
};

const btnsArray = (btnText, pressFunc, cancelText) => {
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
