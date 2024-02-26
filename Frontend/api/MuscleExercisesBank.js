import { URL } from "./ServerConfig";
import { handleApiResponse, handleRequests } from "./../utils/ApiUtils";

export const getExercisesList = async (userToken, muscleId) => {
  const filter = muscleId ? `?muscleGroup=${muscleId}` : "";
  const response = await handleRequests(
    `${URL}/api/exercises${filter}`,
    "GET",
    userToken
  );

  const data = await handleApiResponse(response);
  return data.data.exercises;
};
