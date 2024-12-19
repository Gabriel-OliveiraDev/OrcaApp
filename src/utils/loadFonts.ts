import { useFonts } from "expo-font";

export async function loadFonts() {
  return (
    useFonts({
      "Kanit-Black": require("src/assets/fonts/Kanit-Black.ttf"),
      "Kanit-BlackItalic": require("src/assets/fonts/Kanit-BlackItalic.ttf"),
      "Kanit-Bold": require("src/assets/fonts/Kanit-Bold.ttf"),
      "Kanit-BoldItalic": require("src/assets/fonts/Kanit-BoldItalic.ttf"),
      "Kanit-Italic": require("src/assets/fonts/Kanit-Italic.ttf"),
      "Kanit-Light": require("src/assets/fonts/Kanit-Light.ttf"),
      "Kanit-LightItalic": require("src/assets/fonts/Kanit-LightItalic.ttf"),
      "Kanit-Medium": require("src/assets/fonts/Kanit-Medium.ttf"),
      "Kanit-MediumItalic": require("src/assets/fonts/Kanit-MediumItalic.ttf"),
      "Kanit-Regular": require("src/assets/fonts/Kanit-Regular.ttf"),
    })
  );
};
