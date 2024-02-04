import { IP } from "./IP";

export const getMusclesList = async () => {
  try {
    console.log(IP);
    const response = await fetch(`http://${IP}/api/muscles`, {
      method: "GET",
    });
    const data = await response.json();
    return data.data.muscles;
  } catch (error) {
    console.error("Error in getMusclesList:", error.message);
    throw error;
  }
};
