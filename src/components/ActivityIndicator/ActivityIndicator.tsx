import { useAppTheme } from "@hooks";
import { ThemeColorsT } from "@theme";
import React from "react";
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps
} from "react-native";


interface ActivityIndicatorProps extends Omit<RNActivityIndicatorProps, 'color'> {
  color?: ThemeColorsT;
};

export function ActivityIndicator({ color = 'primary', ...rest }: ActivityIndicatorProps) {

  const { colors } = useAppTheme();

  return (
    <RNActivityIndicator
      color={colors[color]}
      {...rest}
    />
  );
};