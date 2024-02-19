import { URL } from "./ServerConfig";
import { handleApiResponse, handleGetRequests } from "../utils/ApiUtils";

export const getMyWorkoutsList = async (userToken, userId) => {
  const response = await handleGetRequests(
    `${URL}/api/users/${userId}/workouts`,
    userToken
  );
  const data = await handleApiResponse(response);
  return data.data.workouts;
};

export const getWorkoutExercises = async (userToken, workoutId) => {
  const response = await handleGetRequests(
    `${URL}/api/workouts/${workoutId}`,
    userToken
  );
  const data = await handleApiResponse(response);
  return data.data.workout.exercises;
};
