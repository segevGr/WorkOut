import { URL } from "./ServerConfig";
import { handleApiResponse, handleGetRequests } from "./../utils/ApiUtils";

export const getExercisesListByMuscle = async (userToken, muscleId) => {
  const response = await handleGetRequests(
    `${URL}/api/exercises?muscleGroup=${muscleId}`,
    userToken
  );

  const data = await handleApiResponse(response);
  return data.data.exercises;
};
