import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

// import { useDispatch, useSelector } from "react-redux";
// import { updateSelectedCategory } from "../../redux/reducers/MusclesList";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import CollapseOpenWithoutEdit from "../../components/collapseOpen/CollapseOpenWithoutEdit";

import { getExercisesListByMuscle } from "../../api/MuscleExercisesBank";

import globalStyle from "../../assets/styles/globalStyle";
import { Strings } from "../../assets/strings/Strings";
import Indexes from "../../assets/videos/Indexes";

const MuscleExercisesBank = ({ navigation, route }) => {
  // const dispatch = useDispatch();
  // const categoryName = useSelector(
  //   (state) => state.MusclesList.selectedCategory
  // );

  // let exercisesList = useSelector((state) => state.exerciseList.exercises);

  // exercisesList = exercisesList.filter((exercise) =>
  //   exercise.category.includes(categoryName)
  // );

  const muscleName = route.params.selectedMuscle;
  const navigateBack = () => {
    navigation.goBack();
    // dispatch(updateSelectedCategory(null));
  };

  const [exercisesList, setExercisesList] = useState();
  const getExercises = async () => {
    try {
      const results = await getExercisesListByMuscle(muscleName);
      setExercisesList(results);
    } catch (error) {
      console.error("🚀 ~ fetchData ~ error:", error);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={`${Strings.MuscleBankTitle}${muscleName}`}
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
              media={Indexes[item.exerciseVideo]}
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

export default MuscleExercisesBank;
