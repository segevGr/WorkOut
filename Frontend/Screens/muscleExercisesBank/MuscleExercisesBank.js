import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

// External Libraries and Packages
import { getExercisesList } from "../../api/MuscleExercisesBank";
import getUserToken from "../../hooks/getToken";

// Internal Components and Modules
import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import CollapseOpenWithoutEdit from "../../components/collapseOpen/CollapseOpenWithoutEdit";

// Assets
import globalStyle from "../../assets/styles/globalStyle";
import Strings from "../../assets/strings/Strings";
import Indexes from "../../assets/videos/Indexes";
import ExerciseBankItem from "../../components/exerciseBankItem/ExerciseBankItem";

const MuscleExercisesBank = ({ navigation, route }) => {
  const userToken = getUserToken();

  const { muscleId, muscleName } = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };

  const [exercisesList, setExercisesList] = useState([]);
  const getExercises = async (userToken) => {
    try {
      const results = await getExercisesList(userToken, muscleId);
      setExercisesList(results);
    } catch (error) {
      console.error(`Error in getExercisesList: [${error}]`);
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
          return <ExerciseBankItem exercise={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default MuscleExercisesBank;
