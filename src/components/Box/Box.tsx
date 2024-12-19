import { Pressable, TouchableOpacity } from "react-native";

import {
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand
} from '@shopify/restyle';

import { ThemeT } from '@theme';

import { PressableBoxProps, TouchableBoxProps } from '@types';

export const Box = createBox<ThemeT>();

export const TouchableBox = createRestyleComponent<TouchableBoxProps, ThemeT>(
  [backgroundColor, spacing, border, layout, spacingShorthand],
  TouchableOpacity,
);

export const PressableBox = createRestyleComponent<PressableBoxProps, ThemeT>(
  [backgroundColor, spacing, border, layout, spacingShorthand],
  Pressable,
);
