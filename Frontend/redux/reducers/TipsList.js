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
  selectedCategory: {
    categoryName: null,
    tips: [
      {
        name: "מאזן קלורי",
        category: "תזונה",
        mediaType: "image",
        tipMedia: require("../../assets/tips/calorieBalance.png"),
      },
      {
        name: "סיבות לעלייה דרסטית במשקל בזמן קצר",
        category: "תזונה",
        mediaType: "image",
        tipMedia: require("../../assets/tips/weightChange.png"),
      },
      {
        name: "למה אתם לא יורדים באחוזי השומן?",
        category: "תזונה",
        mediaType: "image",
        tipMedia: require("../../assets/tips/fatPercentage.png"),
      },
      {
        name: "למה לא להוריד ארוחות מהתפריט כדי לזרז את התהליך",
        category: "תזונה",
        mediaType: "image",
        tipMedia: require("../../assets/tips/meals.png"),
      },
      {
        name: "הסוד לקוביות בבטן",
        category: "תזונה",
        mediaType: "image",
        tipMedia: require("../../assets/tips/SixPack.png"),
      },
      {
        name: "האם אפשרי לרדת בשומן ולעלות בשריר בו זמנית?",
        category: "תזונה",
        mediaType: "image",
        tipMedia: require("../../assets/tips/LoseFatGaiMuscle.png"),
      },
    ],
  },
};

export const TipsList = createSlice({
  name: "TipsList",
  initialState: initialState,
  reducers: {
    updateSelectedCategory: (state, action) => {
      state.selectedCategory.categoryName = action.payload;
    },
  },
});

export const { updateSelectedCategory } = TipsList.actions;
export default TipsList.reducer;
