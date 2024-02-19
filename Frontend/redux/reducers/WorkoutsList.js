// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   WorkOutTypes: [
//     {
//       workoutName: "אימון A",
//       picture: require("../../assets/pictures/workout.jpg"),
//     },
//     {
//       workoutName: "אימון B",
//       picture: require("../../assets/pictures/workout.jpg"),
//     },
//     {
//       workoutName: "אימון Full Body",
//       picture: require("../../assets/pictures/workout.jpg"),
//     },
//     {
//       workoutName: "test3",
//       picture: require("../../assets/pictures/workout.jpg"),
//     },
//     {
//       workoutName: "test4",
//       picture: require("../../assets/pictures/workout.jpg"),
//     },
//   ],
//   selectedWorkout: null,
// };

// export const WorkoutsList = createSlice({
//   name: "WorkoutsList",
//   initialState: initialState,
//   reducers: {
//     resetWorkoutsList: () => {
//       return initialState;
//     },
//     updateSelectedWorkout: (state, action) => {
//       state.selectedWorkout = action.payload;
//     },
//   },
// });

// export const { resetWorkoutsList, updateSelectedWorkout } =
//   WorkoutsList.actions;
// export default WorkoutsList.reducer;
