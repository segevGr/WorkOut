import { Text, SafeAreaView, FlatList } from "react-native";
import useFonts from "../../assets/fonts/useFonts";
import Header from "../../components/header/Header";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import ExerciseOption from "../../components/exerciseOption/ExerciseOption";

const Workout = () => {
  const fontsLoaded = useFonts({
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    "Manrope-Medium": require("../../assets/fonts/Manrope-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={style.loadingContainer}>
        <Text>Loading fonts...</Text>
      </SafeAreaView>
    );
  }

  const exerciseTypes = [
    {
      exerciseName: "לחיצת חזה",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: "אימון B",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: "אימון Full Body",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: "test3",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      exerciseName: "test4",
      picture: require("../../assets/pictures/workout.jpg"),
    },
  ];

  return (
    <SafeAreaView style={globalStyle.background}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title={"WorkOut"} fontFamily={"Montserrat-Bold"} />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={exerciseTypes}
        renderItem={({ item }) => (
          <ExerciseOption
            key={item.exerciseName}
            exerciseName={item.exerciseName}
            fontFamily={"Manrope-Medium"}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Workout;
