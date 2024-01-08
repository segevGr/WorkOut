import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useFonts(fontMap) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(fontMap);
      setFontsLoaded(true);
    }

    loadFonts();
  }, [fontMap]);

  return fontsLoaded;
}
