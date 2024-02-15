import { URL } from "./ServerConfig";
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
      return { success: false, message: Strings.WrongDetails };
    } else if (response.status === 400) {
      return { success: false, message: Strings.MissingDetails };
    } else if (!response.ok) {
      return { success: false, message: Strings.SomethingWrong };
    }

    const data = await response.json();
    return {
      success: true,
      message: Strings.WelcomeAlert,
      token: data.token,
      user: data.data.user,
    };
  } catch (error) {
    console.error("Error in getMusclesList:", error.message);
    throw error;
  }
};
