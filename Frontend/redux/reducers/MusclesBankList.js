import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
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
      muscleImage: require("../../assets/icons/muscles/chest.png"),
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

export const MusclesBankList = createSlice({
  name: "MusclesBankList",
  initialState: initialState,
  reducers: {
    updateSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { updateSelectedCategory } = MusclesBankList.actions;
export default MusclesBankList.reducer;
