import { URL } from "./ServerConfig";
import { handleApiResponse } from "./../utils/ApiUtils";

export const getExercisesListByMuscle = async (userToken, muscleName) => {
  const response = await fetch(
    `${URL}/api/exercises?muscleGroupName=${muscleName}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  const data = await handleApiResponse(response);
  return data.data.exercises;
};
