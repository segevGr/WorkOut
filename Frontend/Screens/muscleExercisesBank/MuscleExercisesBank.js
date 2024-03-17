import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import { getExercisesList } from "../../api/MuscleExercisesBank";
import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";

import Header from "../../components/header/Header";
import ExerciseBankItem from "../../components/exerciseBankItem/ExerciseBankItem";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";

const MuscleExercisesBank = ({ route }) => {
  const userToken = getUserToken();

  const { muscleId, muscleName } = route.params;

  const [exercisesList, setExercisesList] = useState([]);
  const fetchExercises = async () => {
    try {
      const results = await getExercisesList(userToken, muscleId);
      setExercisesList(results);
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in getExercisesList: [${error}]`);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={`${Strings.MuscleBankTitle}${muscleName}`} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={exercisesList}
        renderItem={({ item }) => {
          return <ExerciseBankItem exercise={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default MuscleExercisesBank;
