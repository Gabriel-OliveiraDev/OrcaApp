import { createTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { colors } from "./colors";
import { spacings } from "./spacings";

export const theme = createTheme({
  colors: colors.blueTheme,
  spacing: spacings.spacing,
  borderRadii: spacings.borderRadii,
});

export const greenTheme = {
  ...theme,
  colors: colors.greenTheme
};

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export type ThemeT = typeof theme;
export type ThemeColorsT = keyof ThemeT["colors"];