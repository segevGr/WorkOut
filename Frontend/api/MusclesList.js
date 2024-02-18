import { URL } from "./ServerConfig";
import { handleApiResponse } from "./../utils/ApiUtils";

export const getMusclesList = async (userToken) => {
  const response = await fetch(`${URL}/api/muscles`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  const data = await handleApiResponse(response);
  return data.data.muscles;
};
