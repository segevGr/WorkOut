import { URL } from "./ServerConfig";
import { handleApiResponse, handleRequests } from "./../utils/ApiUtils";

export const getExercisesListByMuscle = async (userToken, muscleId) => {
  const response = await handleRequests(
    `${URL}/api/exercises?muscleGroup=${muscleId}`,
    "GET",
    userToken
  );

  const data = await handleApiResponse(response);
  return data.data.exercises;
};
