import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";

import getUserToken from "../../hooks/getToken";
import { somethingWrongAlert } from "../../utils/ShowAlert";
import { getMusclesList } from "../../api/MusclesList";
import Header from "../../components/header/Header";
import BorderContainer from "../../components/borderContainer/BorderContainer";
import CategoryContainer from "../../components/categoryContainer/CategoryContainer";
import LoadingOverlay from "../../utils/LoadingOverlay";

import Strings from "../../assets/strings/Strings";
import globalStyle from "../../assets/styles/globalStyle";
import Indexes from "../../assets/icons/muscles/Indexes";

const MusclesList = () => {
  const [isFetchingData, setIsFetchingData] = useState(true);
  const userToken = getUserToken();

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
    setIsFetchingData(false);
  }, []);

  if (isFetchingData) {
    return <LoadingOverlay />;
  }

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={Strings.BankTitle} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={musclesList}
        renderItem={({ item }) => {
          return (
            <BorderContainer key={item.muscleName}>
              <CategoryContainer
                image={Indexes[item.muscleImage]}
                type={"Muscle"}
                primaryText={item.muscleName}
                secondaryText={`${Strings.GoToMuscleMessage} ${item.muscleName}`}
                itemId={item._id}
              />
            </BorderContainer>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MusclesList;
