import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [
    {
      exerciseName: "לחיצת חזה",
      exerciseVideo: require("../../../assets/videos/benchPress.mp4"),
      workOn: "מרכז שריר החזה",
      highlights: "להוציא את החזה ולהחזיק רגליים על הקרקע",
    },
    {
      exerciseName: "לחיצת חזה בשיפוע עליון",
      exerciseImage: require("../../../assets/videos/benchPress.mp4"),
      workOn: "מרכז שריר החזה",
      highlights: "להוציא את החזה ולהחזיק רגליים על הקרקע",
    },
  ],
};

export const ChestExercises = createSlice({
  name: "ChestExercises",
  initialState: initialState,
  reducers: {},
});

export default ChestExercises.reducer;
