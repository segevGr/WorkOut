import React from "react";
import { SafeAreaView } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/reducers/TipsList";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";
import BorderContainer from "../../components/borderContainer/BorderContainer";
import CategoryContainer from "../../components/categoryContainer/CategoryContainer";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";

const TipsCategories = ({ navigation }) => {
  const tipsCategoriesList = useSelector((state) => state.tipsList.categories);
  const dispatch = useDispatch();

  const getSecondaryText = (category) => {
    return category === "כללי"
      ? Strings.TipsGeneralSecondaryText
      : `${Strings.TipsSecondaryText} ${category}`;
  };

  const navigateToTips = (selectedCategory) => {
    dispatch(updateSelectedCategory(selectedCategory));
    navigation.navigate(Routes.Tips);
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <Header title={Strings.TipsCategoriesTitle} />
      {tipsCategoriesList.map((category) => {
        return (
          <BorderContainer key={category.tipCategory}>
            <CategoryContainer
              image={category.tipImage}
              type={"Tips"}
              primaryText={category.tipCategory}
              secondaryText={getSecondaryText(category.tipCategory)}
              onPress={() => navigateToTips(category.tipCategory)}
            />
          </BorderContainer>
        );
      })}
    </SafeAreaView>
  );
};

export default TipsCategories;
