import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import PropTypes from "prop-types";

import style from "./style";

const LoginInput = ({
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
}) => {
  const [value, setValue] = useState("");
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : null}
        style={style.input}
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
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default LoginInput;
