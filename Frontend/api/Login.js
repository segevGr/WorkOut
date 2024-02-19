import { URL } from "./ServerConfig";
import { handleApiResponse } from "./../utils/ApiUtils";

export const tryLogin = async (email, password) => {
  const response = await fetch(`${URL}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await handleApiResponse(response);
  return {
    token: data.token,
    user: data.data.user,
  };
};
