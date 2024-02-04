export const getExercisesListByMuscle = async (muscleName) => {
  try {
    const response = await fetch(
      `http://192.168.137.1:8000/api/exercises?muscleGroupName=${muscleName}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data.data.exercises;
  } catch (error) {
    console.error("Error in getMusclesList:", error.message);
    throw error;
  }
};
