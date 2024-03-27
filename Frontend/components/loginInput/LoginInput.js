import React, { useState } from "react";
import { View, TextInput } from "react-native";

import PropTypes from "prop-types";

import style from "./style";
import Colors from "../../assets/styles/Colors";

const LoginInput = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  styles,
}) => {
  const [value, setValue] = useState("");
  return (
    <View>
      <TextInput
        placeholder={placeholder ? placeholder : null}
        placeholderTextColor={Colors.white}
        style={{ ...style.input, ...styles }}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={(val) => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

LoginInput.defaultProps = {
  secureTextEntry: false,
  keyboardType: "default",
  onChangeText: () => {},
};

LoginInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  styles: PropTypes.object.isRequired,
};

export default LoginInput;
