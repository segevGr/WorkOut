import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exerciseName: "לחיצת חזה",
  exerciseSets: {
    "סט ראשון": "10 קילו 10 חזרות",
    "סט שני": "10 קילו 12 חזרות",
    "סט שלישי": "10 קילו 12 חזרות",
    "סט רביעי": "10 קילו 12 חזרות",
  },
  exerciseNotes: "bla bla bla",
};

export const UserDetails = createSlice({
  name: "userDetails",
  initialState: initialState,
  reducers: {
    updateExerciseName: (state, action) => {
      state.exerciseName = action.payload.exerciseName;
    },
  },
});

export const { updateExerciseName } = UserDetails.actions;
export default UserDetails.reducer;
