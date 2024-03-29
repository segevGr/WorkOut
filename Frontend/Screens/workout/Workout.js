import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

// External Libraries and Packages
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Internal Components and Modules
import Header from "../../components/header/Header";
import CollapseContainer from "../../components/collapseContainer/CollapseContainer";
import CollapseOpenWithEdit from "../../components/collapseOpen/CollapseOpenWithEdit";
import WorkoutsBottomSheet from "../../components/workoutsBottomSheet/WorkoutsBottomSheet";
import LoadingOverlay from "../../utils/LoadingOverlay";

// API and Hooks
import getUserToken from "../../hooks/getToken";
import { getWorkoutExercises } from "../../api/MyWorkouts";
import { getExercisesList } from "../../api/MuscleExercisesBank";
import { somethingWrongAlert } from "../../utils/ShowAlert";

// Assets
import Colors from "../../assets/styles/Colors";
import globalStyle from "../../assets/styles/globalStyle";
import Indexes from "../../assets/videos/Indexes";

const Workout = ({ route }) => {
  const [isFetchingData, setIsFetchingData] = useState(true);
  const userToken = getUserToken();
  const { workoutName, workoutId } = route.params;

  const bottomSheetRef = useRef(null);
  const [exercisesBankList, setExercisesBankList] = useState([]);

  const openBottomSheet = async () => {
    try {
      setExercisesBankList(await getExercisesList(userToken));
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in getExercisesList: [${error}]`);
    }
  };

  const [exerciseList, setExerciseList] = useState([]);
  const fetchWorkoutExercises = async (userToken) => {
    try {
      const workout = await getWorkoutExercises(userToken, workoutId);
      setExerciseList(workout);
    } catch (error) {
      somethingWrongAlert();
      console.error(`Error in getWorkoutExercises: [${error}]`);
    } finally {
      setIsFetchingData(false);
    }
  };

  useEffect(() => {
    fetchWorkoutExercises(userToken);
  }, []);

  useEffect(() => {
    if (exercisesBankList.length > 0) {
      bottomSheetRef.current?.expand();
    }
  }, [exercisesBankList]);

  if (isFetchingData) {
    return <LoadingOverlay />;
  }

  return (
    <SafeAreaView style={globalStyle.background}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Header
            title={workoutName}
            optionButtonIcon={faPlus}
            optionButtonFunction={openBottomSheet}
          />
          {exerciseList.map((item) => (
            <CollapseContainer
              key={item._id}
              name={item.exerciseId.exerciseName}
              media={Indexes[item.exerciseId.exerciseVideo]}
              mediaType={"video"}
              collapseOpenContent={
                <>
                  <CollapseOpenWithEdit
                    workoutId={workoutId}
                    exerciseId={item._id}
                    setsData={item.sets}
                    isSets={true}
                  />
                  <CollapseOpenWithEdit
                    workoutId={workoutId}
                    exerciseId={item._id}
                    backgroundColor={Colors.lightBlueSecondary}
                    notesData={item.notes}
                  />
                </>
              }
            />
          ))}
        </ScrollView>
      </View>
      <WorkoutsBottomSheet
        exercisesBankList={exercisesBankList}
        exerciseList={exerciseList.map((item) => item.exerciseId._id)}
        setExerciseList={setExerciseList}
        bottomSheetRef={bottomSheetRef}
        workoutId={workoutId}
      />
    </SafeAreaView>
  );
};

export default Workout;
