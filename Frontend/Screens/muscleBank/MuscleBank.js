import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/reducers/MusclesBankList";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import CollapseOpenWithoutEdit from "../../components/collapseOpen/CollapseOpenWithoutEdit";

import globalStyle from "../../assets/styles/globalStyle";
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
              title={`${Strings.MuscleBankTitle}${categoryName}`}
              backPress={() => navigateBack()}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={exercisesList}
        renderItem={({ item }) => {
          return (
            <CollapseContainer
              name={item.exerciseName}
              media={item.exerciseVideo}
              mediaType={"video"}
              collapseOpenContent={
                <>
                  <CollapseOpenWithoutEdit
                    title={Strings.WorksOn}
                    exerciseData={item.workOn}
                  />
                  <CollapseOpenWithoutEdit
                    title={Strings.Highlights}
                    exerciseData={item.highlights}
                    backgroundColor="#F6FAFD"
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
