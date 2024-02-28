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

export const deleteWorkoutFromList = async (userToken, workoutId) => {
  const response = await handleRequests(
    `${URL}/api/workouts/${workoutId}`,
    "DELETE",
    userToken
  );
  const data = await handleApiResponse(response);
  return;
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

export const createWorkout = async (
  userToken,
  user,
  workoutName,
  workoutImage
) => {
  const body = { workoutName, workoutImage, user };
  const response = await handleRequests(
    `${URL}/api/workouts/`,
    "POST",
    userToken,
    body
  );
  const data = await handleApiResponse(response);
  return data.status;
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

export const addExerciseToWorkout = async (
  userToken,
  workoutId,
  exerciseID
) => {
  const response = await handleRequests(
    `${URL}/api/workouts/${workoutId}/exercise/${exerciseID}`,
    "POST",
    userToken
  );
  const data = await handleApiResponse(response);
  return data.data.workout.exercises;
};
