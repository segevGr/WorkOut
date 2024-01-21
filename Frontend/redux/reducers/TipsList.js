import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      tipCategory: "אימונים",
      tipImage: require("../../assets/icons/tips/workout.png"),
    },
    {
      tipCategory: "תזונה",
      tipImage: require("../../assets/icons/tips/meal.png"),
    },
    {
      tipCategory: "כללי",
      tipImage: require("../../assets/icons/tips/general.png"),
    },
  ],
  selectedCategory: null,
};

export const TipsList = createSlice({
  name: "TipsList",
  initialState: initialState,
  reducers: {
    updateSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { updateSelectedCategory } = TipsList.actions;
export default TipsList.reducer;
