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
import { updateSelectedCategory } from "../../redux/reducers/MusclesBankList";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";
import OptionContainer from "../../components/optionContainer/OptionContainer";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";

const MusclesBank = ({ navigation }) => {
  const musclesList = useSelector((state) => state.musclesBankList.categories);
  const dispatch = useDispatch();

  const navigateToMuscle = (selectedCategory) => {
    dispatch(updateSelectedCategory(selectedCategory));
    navigation.navigate(Routes.MuscleBank);
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={"בנק תרגילים"}
              backPress={() => navigation.goBack()}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={musclesList}
        renderItem={({ item }) => (
          <OptionContainer
            key={item.muscleName}
            content={
              <>
                <View style={style.musclesContainer}>
                  <View style={style.imageContainer}>
                    <Image
                      source={item.muscleImage}
                      resizeMode="contain"
                      style={style.image}
                    />
                  </View>
                  <View style={style.textContainer}>
                    <Text style={style.primaryText}>{item.muscleName}</Text>
                    <Text style={style.secondaryText}>
                      למעבר לתרגילי {item.muscleName}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigateToMuscle(item.muscleName)}
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
        )}
      />
    </SafeAreaView>
  );
};

export default MusclesBank;
