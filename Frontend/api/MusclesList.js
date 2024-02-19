import { URL } from "./ServerConfig";
import { handleApiResponse, handleRequests } from "./../utils/ApiUtils";

export const getMusclesList = async (userToken) => {
  const response = await handleRequests(`${URL}/api/muscles`, "GET", userToken);

  const data = await handleApiResponse(response);
  return data.data.muscles;
};
