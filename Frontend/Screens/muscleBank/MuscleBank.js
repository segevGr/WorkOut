import React from "react";
import { SafeAreaView, View, Text, Image, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/reducers/MusclesBankList";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";

import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { horizontalScale } from "../../assets/styles/scaling";
import BankExerciseCollapseOpen from "../../components/collapseOpen/BankExerciseCollapseOpen";
import { Strings } from "../../assets/strings/Strings";

const MuscleBank = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryName = useSelector(
    (state) => state.musclesBankList.selectedCategory
  );

  let exercisesList = useSelector((state) => state.exerciseList.exercises);

  exercisesList = exercisesList.filter((exercise) =>
    exercise.category.includes(categoryName)
  );

  const navigateBack = () => {
    navigation.goBack();
    dispatch(updateSelectedCategory(null));
  };

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={`תרגילים ל${categoryName}`}
              backPress={() => navigateBack()}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={exercisesList}
        renderItem={({ item }) => {
          return (
            <CollapseContainer
              exerciseName={item.exerciseName}
              exerciseVideo={item.exerciseVideo}
              collapseOpenContent={
                <>
                  <BankExerciseCollapseOpen
                    title={Strings.WorksOn}
                    exerciseData={item.workOn}
                  />
                  <BankExerciseCollapseOpen
                    title={Strings.Highlights}
                    exerciseData={item.highlights}
                  />
                </>
              }
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MuscleBank;
