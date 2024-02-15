import { URL } from "./ServerConfig";

export const getMusclesList = async () => {
  try {
    const response = await fetch(`${URL}/api/muscles`, {
      method: "GET",
    });
    const data = await response.json();
    return data.data.muscles;
  } catch (error) {
    console.error("Error in getMusclesList:", error.message);
    throw error;
  }
};
