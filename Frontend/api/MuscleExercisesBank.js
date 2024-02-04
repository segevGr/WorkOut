import { IP } from "./IP";

export const getExercisesListByMuscle = async (muscleName) => {
  try {
    const response = await fetch(
      `http://${IP}/api/exercises?muscleGroupName=${muscleName}`,
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
