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

const MenuBankList = ({ navigation }) => {
  const menuCategoriesList = useSelector(
    (state) => state.menuBankList.categories
  );
  const dispatch = useDispatch();

  const navigateToTips = (selectedCategory) => {
    dispatch(updateSelectedCategory(selectedCategory));
    navigation.navigate(Routes.Tips);
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <Header
        title={Strings.MenuCategoriesTitle}
        backPress={() => navigation.goBack()}
      />
      {menuCategoriesList.map((category) => {
        return (
          <BorderContainer key={category.menuCategory}>
            <CategoryContainer
              image={category.menuImage}
              primaryText={category.menuCategory}
              secondaryText={`${Strings.MenuSecondaryText} ${category.menuCategory}`}
              onPress={() => navigateToTips(category.menuCategory)}
            />
          </BorderContainer>
        );
      })}
    </SafeAreaView>
  );
};

export default MenuBankList;
