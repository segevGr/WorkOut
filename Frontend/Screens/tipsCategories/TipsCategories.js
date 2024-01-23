import React from "react";
import { SafeAreaView } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/reducers/TipsList";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";
import BorderContainer from "../../components/borderContainer/BorderContainer";
import CategoryContainer from "../../components/categoryContainer/CategoryContainer";

import { Strings } from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";

const TipsCategories = ({ navigation }) => {
  const tipsCategoriesList = useSelector((state) => state.tipsList.categories);
  const dispatch = useDispatch();

  const getSecondaryText = (category) => {
    return category === "כללי"
      ? Strings.GoToGeneralTips
      : `${Strings.GoToTips} ${category}`;
  };

  const navigateToTips = (selectedCategory) => {
    dispatch(updateSelectedCategory(selectedCategory));
    navigation.navigate(Routes.Tips);
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <Header
        title={Strings.TipsCategoriesTitle}
        backPress={() => navigation.goBack()}
      />
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
