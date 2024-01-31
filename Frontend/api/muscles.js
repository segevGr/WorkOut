export const getMusclesList = async () => {
  try {
    const response = await fetch(`http://10.0.0.23:8000/api/muscles`, {
      method: "GET",
    });
    const data = await response.json();
    return data.data.muscles;
  } catch (error) {
    console.error("Error in getMusclesList:", error.message);
    throw error;
  }
};
