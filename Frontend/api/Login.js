import { URL } from "./ServerConfig";
import { handleApiResponse, handleRequests } from "./../utils/ApiUtils";

export const tryLogin = async (email, password) => {
  const body = { email, password };
  const response = await handleRequests(
    `${URL}/api/users/login`,
    "POST",
    null,
    body
  );

  const data = await handleApiResponse(response);
  return {
    token: data.token,
    user: data.data.user,
  };
};
