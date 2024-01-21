import React, { useEffect } from "react";
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
import OptionContainer from "../../components/optionContainer/OptionContainer";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const Tips = ({ navigation }) => {
  const tipsCategoriesList = useSelector((state) => state.tipsList.categories);
  const dispatch = useDispatch();

  const getSecondaryText = (category) => {
    return category === "כללי"
      ? "למעבר לטיפים כלליים"
      : `למעבר לטיפים בנושא ${category}`;
  };

  const navigateToMuscle = (selectedCategory) => {
    dispatch(updateSelectedCategory(selectedCategory));
    navigation.navigate(Routes.MuscleBank);
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <Header title={"טיפים לתהליך"} backPress={() => navigation.goBack()} />
      {tipsCategoriesList.map((item) => {
        return (
          <OptionContainer
            key={item.tipCategory}
            content={
              <>
                <View style={style.TipContainer}>
                  <View style={style.imageContainer}>
                    <Image
                      source={item.tipImage}
                      resizeMode="contain"
                      style={style.image}
                    />
                  </View>
                  <View style={style.textContainer}>
                    <Text style={style.primaryText}>{item.tipCategory}</Text>
                    <Text style={style.secondaryText}>
                      {getSecondaryText(item.tipCategory)}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigateToMuscle(item.tipCategory)}
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      size={horizontalScale(24)}
                    />
                  </TouchableOpacity>
                </View>
              </>
            }
          />
        );
      })}
    </SafeAreaView>
  );
};

export default Tips;
