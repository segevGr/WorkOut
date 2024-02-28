import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

// External Libraries and Packages
import { getExercisesList } from "../../api/MuscleExercisesBank";
import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";

// Internal Components and Modules
import Header from "../../components/header/Header";

// Assets
import globalStyle from "../../assets/styles/globalStyle";
import Strings from "../../assets/strings/Strings";
import ExerciseBankItem from "../../components/exerciseBankItem/ExerciseBankItem";

const MuscleExercisesBank = ({ navigation, route }) => {
  const userToken = getUserToken();

  const { muscleId, muscleName } = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };

  const [exercisesList, setExercisesList] = useState([]);
  const getExercises = async () => {
    try {
      const results = await getExercisesList(userToken, muscleId);
      setExercisesList(results);
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in getExercisesList: [${error}]`);
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
          return <ExerciseBankItem exercise={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default MuscleExercisesBank;
