import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      menuCategory: "חלבונים",
      menuImage: require("../../assets/icons/menu/proteins.png"),
    },
    {
      menuCategory: "פחמימות",
      menuImage: require("../../assets/icons/menu/carbohydrates.png"),
    },
    {
      menuCategory: "שומנים",
      menuImage: require("../../assets/icons/menu/fats.png"),
    },
  ],
  selectedCategory: {
    categoryName: null,
    menus: [
      {
        name: "3 ביצים",
        category: "חלבונים",
        mediaType: "image",
      },
      {
        name: "טונה בשמן",
        category: "חלבונים",
        mediaType: "image",
      },
      {
        name: "גביע קוטג' 3%",
        category: "חלבונים",
        mediaType: "image",
      },
      {
        name: "גביע גבינה לבנה 3%",
        category: "חלבונים",
        mediaType: "image",
      },
      {
        name: "יוגורט חלבון",
        category: "חלבונים",
        mediaType: "image",
      },
      {
        name: "4 פרוסות לחם קל",
        category: "פחמימות",
        mediaType: "image",
      },
      {
        name: "6 פריכיות אורז",
        category: "פחמימות",
        mediaType: "image",
      },
      {
        name: "2 כוסות אורז אחרי בישול (200 גרם)",
        category: "פחמימות",
        mediaType: "image",
      },
      {
        name: "תפוח אדמה בינוני מבושל",
        category: "פחמימות",
        mediaType: "image",
      },
      {
        name: "כף שמן זית",
        category: "שומנים",
        mediaType: "image",
      },
      {
        name: "כף טחינה גולמית",
        category: "שומנים",
        mediaType: "image",
      },
      {
        name: "20 שקדים",
        category: "שומנים",
        mediaType: "image",
      },
      {
        name: "כף שטוחה של חמאת בוטנים",
        category: "שומנים",
        mediaType: "image",
      },
    ],
  },
};

export const MenuBankList = createSlice({
  name: "MenuBankList",
  initialState: initialState,
  reducers: {
    updateSelectedCategory: (state, action) => {
      state.selectedCategory.categoryName = action.payload;
    },
  },
});

export const { updateSelectedCategory } = MenuBankList.actions;
export default MenuBankList.reducer;
