import { URL } from "./ServerConfig";
import { handleApiResponse, handleGetRequests } from "./../utils/ApiUtils";

export const getMusclesList = async (userToken) => {
  const response = await handleGetRequests(`${URL}/api/muscles`, userToken);

  const data = await handleApiResponse(response);
  return data.data.muscles;
};
