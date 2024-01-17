import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catagories: [
    {
      muscleName: "בטן",
      muscleImage: require("../../assets/icons/muscles/Six-pack.png"),
    },
    {
      muscleName: "גב",
      muscleImage: require("../../assets/icons/muscles/back.png"),
    },
    {
      muscleName: "חזה",
      muscleImage: require("../../assets/icons/muscles/chestIcon.png"),
    },
    {
      muscleName: "יד אחורית",
      muscleImage: require("../../assets/icons/muscles/tricep.png"),
    },
    {
      muscleName: "יד קדמית",
      muscleImage: require("../../assets/icons/muscles/biceps.png"),
    },
    {
      muscleName: "כתפיים",
      muscleImage: require("../../assets/icons/muscles/Shoulder.png"),
    },
    {
      muscleName: "רגליים",
      muscleImage: require("../../assets/icons/muscles/legs.png"),
    },
    {
      muscleName: "TRX",
      muscleImage: require("../../assets/icons/muscles/trx.png"),
    },
  ],
  selectedCategory: null,
};

export const ExerciseBankList = createSlice({
  name: "ExerciseBankList",
  initialState: initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload.selectedCategory;
    },
  },
});

export const { setSelectedCategory } = ExerciseBankList.actions;
export default ExerciseBankList.reducer;
