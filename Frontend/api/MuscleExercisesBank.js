import { URL } from "./ServerConfig";
import { handleApiResponse, handleGetRequests } from "./../utils/ApiUtils";

export const getExercisesListByMuscle = async (userToken, muscleName) => {
  const response = await handleGetRequests(
    `${URL}/api/exercises?muscleGroupName=${muscleName}`,
    userToken
  );

  const data = await handleApiResponse(response);
  return data.data.exercises;
};
