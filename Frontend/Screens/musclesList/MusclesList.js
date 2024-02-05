import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCategory } from "../../redux/reducers/MusclesList";

import { Routes } from "../../navigation/Routes";

import Header from "../../components/header/Header";
import BorderContainer from "../../components/borderContainer/BorderContainer";
import CategoryContainer from "../../components/categoryContainer/CategoryContainer";

import { getMusclesList } from "../../api/MusclesList";

import { Strings } from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";
import Indexes from "../../assets/icons/muscles/Indexes";

const MusclesList = ({ navigation }) => {
  // const musclesList = useSelector((state) => state.MusclesList.categories);

  // const dispatch = useDispatch();

  const navigateToMuscle = (selectedMuscle) => {
    // dispatch(updateSelectedCategory(selectedMuscle));
    navigation.navigate(Routes.MuscleExercisesBank, {
      selectedMuscle: selectedMuscle,
    });
  };

  const [musclesList, setMusclesList] = useState();
  const getMuscles = async () => {
    try {
      const results = await getMusclesList();
      setMusclesList(results);
    } catch (error) {
      console.error("🚀 ~ fetchData ~ error:", error);
    }
  };

  useEffect(() => {
    getMuscles();
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
            <BorderContainer
              key={item.muscleName}
              content={
                <>
                  <CategoryContainer
                    image={Indexes[item.muscleImage]}
                    primaryText={item.muscleName}
                    secondaryText={`${Strings.GoToMuscleMessage} ${item.muscleName}`}
                    onPress={() => navigateToMuscle(item.muscleName)}
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

export default MusclesList;