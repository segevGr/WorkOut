import React from "react";
import { SafeAreaView, View, Text, Image, FlatList } from "react-native";

import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import CollapseOpenWithoutEdit from "../../components/collapseOpen/CollapseOpenWithoutEdit";

import globalStyle from "../../assets/styles/globalStyle";

const Tips = ({ navigation }) => {
  const categoryName = useSelector(
    (state) => state.tipsList.selectedCategory["categoryName"]
  );

  let tipsList = useSelector(
    (state) => state.tipsList.selectedCategory["tips"]
  );

  tipsList = tipsList.filter((tip) => tip.category === categoryName);

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={`תרגילים ל${categoryName}`}
              backPress={() => navigation.goBack()}
            />
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
              collapseOpenContent={null}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Tips;
