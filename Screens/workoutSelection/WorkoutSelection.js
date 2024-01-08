import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import useFonts from "../../assets/fonts/useFonts";
import Header from "../../components/header/Header";
import WorkOutOption from "../../components/workoutOption/WorkoutOption";
import globalStyle from "../../assets/styles/globalStyle";

const WorkoutSelection = () => {
  const fontsLoaded = useFonts({
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    "Manrope-Bold": require("../../assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text>Loading fonts...</Text>
      </SafeAreaView>
    );
  }

  const WorkOutTypes = [
    {
      key: 1,
      workoutName: "אימון A",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      key: 2,
      workoutName: "אימון B",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      key: 3,
      workoutName: "אימון Full Body",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      key: 4,
      workoutName: "test3",
      picture: require("../../assets/pictures/workout.jpg"),
    },
    {
      key: 5,
      workoutName: "test4",
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
        data={WorkOutTypes}
        renderItem={({ item }) => (
          <WorkOutOption
            key={item.key}
            workoutName={item.workoutName}
            picture={item.picture}
            fontFamily={"Manrope-Bold"}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WorkoutSelection;
