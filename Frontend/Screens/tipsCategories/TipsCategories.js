import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/reducers/TipsList";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";
import BorderContainer from "../../components/borderContainer/BorderContainer";

import globalStyle from "../../assets/styles/globalStyle";
import CategoryContainer from "../../components/categoryContainer/CategoryContainer";

const TipsCategories = ({ navigation }) => {
  const tipsCategoriesList = useSelector((state) => state.tipsList.categories);
  const dispatch = useDispatch();

  const getSecondaryText = (category) => {
    return category === "כללי"
      ? "למעבר לטיפים כלליים"
      : `למעבר לטיפים בנושא ${category}`;
  };

  const navigateToTips = (selectedCategory) => {
    dispatch(updateSelectedCategory(selectedCategory));
    navigation.navigate(Routes.Tips);
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <Header title={"טיפים לתהליך"} backPress={() => navigation.goBack()} />
      {tipsCategoriesList.map((tip) => {
        return (
          <BorderContainer
            key={tip.tipCategory}
            content={
              <>
                <CategoryContainer
                  image={tip.tipImage}
                  primaryText={tip.tipCategory}
                  secondaryText={getSecondaryText(tip.tipCategory)}
                  onPress={() => navigateToTips(tip.tipCategory)}
                />
              </>
            }
          />
        );
      })}
    </SafeAreaView>
  );
};

export default TipsCategories;
