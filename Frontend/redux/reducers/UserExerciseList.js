import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [
    {
      exerciseName: "לחיצת חזה",
      exerciseSets: `סט ראשון: 10 קילו 4 חזרות\nסט שני: 20 קילו 6 חזרות`,
      exerciseNotes: "bla bla bla",
      exerciseVideoName: require("../../assets/videos/benchPress.mp4"),
      containInWorkout: ["אימון A"],
    },
    {
      exerciseName: "פרפר",
      exerciseSets: `סט ראשון: 10 קילו 4 חזרות\nסט שני: 20 קילו 6 חזרות`,
      exerciseNotes: "bla bla bla",
      exerciseVideoName: require("../../assets/videos/benchPress.mp4"),
      containInWorkout: ["אימון A"],
    },
    {
      exerciseName: "לחיצת כתפיים",
      exerciseSets: `סט ראשון: 10 קילו 4 חזרות\nסט שני: 20 קילו 6 חזרות`,
      exerciseNotes: "bla bla bla",
      exerciseVideoName: require("../../assets/videos/benchPress.mp4"),
      containInWorkout: ["אימון B"],
    },
    {
      exerciseName: "מקבילים",
      exerciseSets: `סט ראשון: 10 קילו 4 חזרות\nסט שני: 20 קילו 6 חזרות`,
      exerciseNotes: "bla bla bla",
      exerciseVideoName: require("../../assets/videos/benchPress.mp4"),
      containInWorkout: ["אימון B"],
    },
    {
      exerciseName: "לחיצת משהו",
      exerciseSets: `סט ראשון: 10 קילו 4 חזרות\nסט שני: 20 קילו 6 חזרות`,
      exerciseNotes: "bla bla bla",
      exerciseVideoName: require("../../assets/videos/benchPress.mp4"),
      containInWorkout: ["אימון B", "אימון A"],
    },
  ],
};

export const UserExerciseList = createSlice({
  name: "UserExerciseList",
  initialState: initialState,
  reducers: {
    updateExerciseName: (state, action) => {
      state.exerciseName = action.payload.exerciseName;
    },
    updateExerciseNotes: (state, action) => {
      const { exerciseName, exerciseNotes } = action.payload;
      const foundExercise = state.exercises.find(
        (exercise) => exercise.exerciseName === exerciseName
      );
      if (foundExercise) {
        foundExercise.exerciseNotes = exerciseNotes;
      }
    },
    updateExerciseSets: (state, action) => {
      const { exerciseName, exerciseSets } = action.payload;
      const foundExercise = state.exercises.find(
        (exercise) => exercise.exerciseName === exerciseName
      );
      if (foundExercise) {
        foundExercise.exerciseSets = exerciseSets;
      }
    },
  },
});

export const { updateExerciseName, updateExerciseNotes, updateExerciseSets } =
  UserExerciseList.actions;
export default UserExerciseList.reducer;
