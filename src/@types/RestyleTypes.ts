import { PressableProps, TouchableOpacityProps } from 'react-native';
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps
} from '@shopify/restyle';
import { ThemeT } from '@theme';


export type RestyleTypes =
  & BackgroundColorProps<ThemeT>
  & LayoutProps<ThemeT>
  & BorderProps<ThemeT>
  & SpacingProps<ThemeT>
  & SpacingShorthandProps<ThemeT>
  ;

export type TouchableBoxProps = RestyleTypes & TouchableOpacityProps;

export type PressableBoxProps = RestyleTypes & PressableProps;