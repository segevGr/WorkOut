import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [
    {
      exerciseName: "לחיצת חזה",
      exerciseSets: {
        "סט ראשון": "10 קילו 10 חזרות",
        "סט שני": "10 קילו 12 חזרות",
        "סט שלישי": "10 קילו 12 חזרות",
        "סט רביעי": "10 קילו 12 חזרות",
      },
      exerciseNotes: "bla bla bla",
      exerciseVideoName: "benchPress",
      containInWorkout: ["אימון A"],
    },
    {
      exerciseName: "פרפר",
      exerciseSets: {
        "סט ראשון": "10 קילו 10 חזרות",
        "סט שני": "10 קילו 12 חזרות",
        "סט שלישי": "10 קילו 12 חזרות",
        "סט רביעי": "10 קילו 12 חזרות",
      },
      exerciseNotes: "bla bla bla",
      exerciseVideoName: "benchPress",
      containInWorkout: ["אימון A"],
    },
    {
      exerciseName: "לחיצת כתפיים",
      exerciseSets: {
        "סט ראשון": "10 קילו 10 חזרות",
        "סט שני": "10 קילו 12 חזרות",
        "סט שלישי": "10 קילו 12 חזרות",
        "סט רביעי": "10 קילו 12 חזרות",
      },
      exerciseNotes: "bla bla bla",
      exerciseVideoName: "benchPress",
      containInWorkout: ["אימון B"],
    },
    {
      exerciseName: "מקבילים",
      exerciseSets: {
        "סט ראשון": "10 קילו 10 חזרות",
        "סט שני": "10 קילו 12 חזרות",
        "סט שלישי": "10 קילו 12 חזרות",
        "סט רביעי": "10 קילו 12 חזרות",
      },
      exerciseNotes: "bla bla bla",
      exerciseVideoName: "benchPress",
      containInWorkout: ["אימון B"],
    },
    {
      exerciseName: "מקבילים",
      exerciseSets: {
        "סט ראשון": "10 קילו 10 חזרות",
        "סט שני": "10 קילו 12 חזרות",
        "סט שלישי": "10 קילו 12 חזרות",
        "סט רביעי": "10 קילו 12 חזרות",
      },
      exerciseNotes: "bla bla bla",
      exerciseVideoName: "benchPress",
      containInWorkout: ["אימון B", "אימון A"],
    },
  ],
};

export const ExerciseList = createSlice({
  name: "userDetails",
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
  },
});

export const { updateExerciseName, updateExerciseNotes } = ExerciseList.actions;
export default ExerciseList.reducer;
