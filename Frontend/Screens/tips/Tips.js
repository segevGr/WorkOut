import React from "react";
import { SafeAreaView, View, Text, Image, FlatList } from "react-native";

import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";

const Tips = ({ route }) => {
  const categoryName = route.params.headerText;

  let tipsList = useSelector(
    (state) => state.tipsList.selectedCategory["tips"]
  );

  tipsList = tipsList.filter((tip) => tip.category === categoryName);

  const getTitleText = (category) => {
    return category === "כללי"
      ? Strings.GeneralsTipsTitle
      : `${Strings.TipsTitle} ${category}`;
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={getTitleText(categoryName)} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={tipsList}
        renderItem={({ item }) => {
          return (
            <CollapseContainer
              name={item.name}
              media={item.tipMedia}
              mediaType={item.mediaType}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Tips;
