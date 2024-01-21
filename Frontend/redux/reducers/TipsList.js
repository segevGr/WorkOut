import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      tipCategory: "אימונים",
      tipImage: require("../../assets/icons/muscles/Six-pack.png"),
    },
    {
      tipCategory: "תזונה",
      tipImage: require("../../assets/icons/muscles/back.png"),
    },
    {
      tipCategory: "כללי",
      tipImage: require("../../assets/icons/muscles/chest.png"),
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
