import { URL } from "./Server";
import { Strings } from "../assets/strings/Strings";

export const tryLogin = async (email, password) => {
  try {
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

    if (response.status === 401) {
      return { success: false, message: Strings.wrongDetails };
    } else if (response.status === 400) {
      return { success: false, message: Strings.missingDetails };
    } else if (!response.ok) {
      return { success: false, message: Strings.somethingWrong };
    }

    const data = await response.json();
    return {
      success: true,
      message: Strings.welcomeAlert,
      token: data.token,
      user: data.data.user,
    };
  } catch (error) {
    console.error("Error in getMusclesList:", error.message);
    throw error;
  }
};
