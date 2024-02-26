import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import BorderContainer from "../borderContainer/BorderContainer";

import style from "./style";

const CollapseOpenWithoutEdit = ({ title, exerciseData, backgroundColor }) => {
  return (
    <View>
      <BorderContainer
        containerStyle={{
          ...style.innerContainer,
          backgroundColor: backgroundColor,
        }}
        content={
          <>
            <View style={style.contentContainer}>
              <Text style={style.textsTitle}>{title}</Text>
              <Text style={style.content}>{exerciseData}</Text>
            </View>
          </>
        }
      />
    </View>
  );
};

CollapseOpenWithoutEdit.defaultProps = {
  backgroundColor: "#FFFFFF",
};

CollapseOpenWithoutEdit.prototype = {
  title: PropTypes.string.isRequired,
  exerciseData: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default CollapseOpenWithoutEdit;
