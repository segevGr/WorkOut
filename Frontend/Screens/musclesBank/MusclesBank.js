import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/reducers/MusclesBankList";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";
import OptionContainer from "../../components/optionContainer/OptionContainer";
import CategoryContainer from "../../components/categoryContainer/CategoryContainer";

import globalStyle from "../../assets/styles/globalStyle";

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
                <CategoryContainer
                  image={item.muscleImage}
                  primaryText={item.muscleName}
                  secondaryText={`למעבר לתרגילי ${item.muscleName}`}
                  onPress={() => navigateToMuscle(item.muscleName)}
                />
              </>
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MusclesBank;
