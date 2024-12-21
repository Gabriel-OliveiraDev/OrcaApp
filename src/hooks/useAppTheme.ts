import { useTheme } from "@shopify/restyle";
import { ThemeT } from "@theme";

export function useAppTheme() {
  return useTheme<ThemeT>();
};