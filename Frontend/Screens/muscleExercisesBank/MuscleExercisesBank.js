import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import CollapseOpenWithoutEdit from "../../components/collapseOpen/CollapseOpenWithoutEdit";

import { getExercisesListByMuscle } from "../../api/MuscleExercisesBank";
import getUserToken from "../../hooks/getToken";

import globalStyle from "../../assets/styles/globalStyle";
import { Strings } from "../../assets/strings/Strings";
import Indexes from "../../assets/videos/Indexes";

const MuscleExercisesBank = ({ navigation, route }) => {
  const userToken = getUserToken();

  const { muscleId, muscleName } = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };

  const [exercisesList, setExercisesList] = useState([]);
  const getExercises = async (userToken) => {
    try {
      const results = await getExercisesListByMuscle(userToken, muscleId);
      setExercisesList(results);
    } catch (error) {
      console.error(`Error in getExercisesListByMuscle: [${error}]`);
    }
  };

  useEffect(() => {
    getExercises(userToken);
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
