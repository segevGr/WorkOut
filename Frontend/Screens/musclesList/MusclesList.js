import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import { Routes } from "../../navigation/Routes";
import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";
import { getMusclesList } from "../../api/MusclesList";
import Header from "../../components/header/Header";
import BorderContainer from "../../components/borderContainer/BorderContainer";
import CategoryContainer from "../../components/categoryContainer/CategoryContainer";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";
import Indexes from "../../assets/icons/muscles/Indexes";

const MusclesList = ({ navigation }) => {
  const userToken = getUserToken();

  const navigateToMuscle = (muscleId, muscleName) => {
    navigation.navigate(Routes.MuscleExercisesBank, {
      muscleId,
      muscleName,
    });
  };

  const [musclesList, setMusclesList] = useState([]);
  const getMuscles = async (userToken) => {
    try {
      const results = await getMusclesList(userToken);
      setMusclesList(results);
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in getMusclesList: [${error}]`);
    }
  };

  useEffect(() => {
    getMuscles(userToken);
  }, []);

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              title={Strings.BankTitle}
              backPress={() => navigation.goBack()}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={musclesList}
        renderItem={({ item }) => {
          return (
            <BorderContainer key={item.muscleName}>
              <CategoryContainer
                image={Indexes[item.muscleImage]}
                primaryText={item.muscleName}
                secondaryText={`${Strings.GoToMuscleMessage} ${item.muscleName}`}
                onPress={() => navigateToMuscle(item._id, item.muscleName)}
              />
            </BorderContainer>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MusclesList;
