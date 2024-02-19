import { URL } from "./ServerConfig";
import { handleApiResponse, handleRequests } from "../utils/ApiUtils";

export const getMyWorkoutsList = async (userToken, userId) => {
  const response = await handleRequests(
    `${URL}/api/users/${userId}/workouts`,
    "GET",
    userToken
  );
  const data = await handleApiResponse(response);
  return data.data.workouts;
};

export const getWorkoutExercises = async (userToken, workoutId) => {
  const response = await handleRequests(
    `${URL}/api/workouts/${workoutId}`,
    "GET",
    userToken
  );
  const data = await handleApiResponse(response);
  return data.data.workout.exercises;
};

export const updateMyExercise = async (
  userToken,
  workoutId,
  exerciseID,
  updateBody
) => {
  const response = await handleRequests(
    `${URL}/api/workouts/${workoutId}/exercise/${exerciseID}`,
    "PATCH",
    userToken,
    updateBody
  );
  await handleApiResponse(response);
  return;
};
