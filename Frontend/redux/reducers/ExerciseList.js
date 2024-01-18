import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [
    {
      exerciseName: "לחיצת חזה",
      exerciseVideo: require("../../assets/videos/benchPress.mp4"),
      workOn: "מרכז שריר החזה",
      highlights: "להוציא את החזה ולהחזיק רגליים על הקרקע",
      category: ["חזה"],
    },
    {
      exerciseName: "לחיצת חזה בשיפוע עליון",
      exerciseImage: require("../../assets/videos/benchPress.mp4"),
      workOn: "מרכז שריר החזה",
      highlights: "להוציא את החזה ולהחזיק רגליים על הקרקע",
      category: ["חזה"],
    },
    {
      exerciseName: "לחיצת תאומים",
      exerciseImage: require("../../assets/videos/benchPress.mp4"),
      workOn: "רגל תאומים",
      highlights: "להוציא את החזה ולהחזיק רגליים על הקרקע",
      category: ["רגליים"],
    },
  ],
};

export const ExerciseList = createSlice({
  name: "ExerciseList",
  initialState: initialState,
  reducers: {},
});

export const { getExerciseByCategory } = ExerciseList.actions;
export default ExerciseList.reducer;
