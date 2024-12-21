import React from "react";
import { Text } from "../Text/Text";
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { TouchableBox } from '../Box/Box';

import { TouchableBoxProps } from "@types";

import { ButtonPreset, buttonPresets } from './buttonPreset';

export interface ButtonProps extends TouchableBoxProps {
  isLoading?: boolean;
  title: string;
  preset: ButtonPreset;
  disabled: boolean;
};

export function Button({
  isLoading = false,
  title,
  preset,
  disabled,
  ...rest
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableBox
      disabled={disabled}
      justifyContent="center"
      alignItems="center"
      borderRadius="s16"
      height={50}
      px="s20"
      {...buttonPreset.container}
      {...rest}
    >
      {isLoading ?
        <ActivityIndicator color={buttonPreset.content.color} />
        :
        <Text
          preset="paragraphMedium"
          bold
          color={buttonPreset.content.color}
          {...buttonPreset.content.textProps}
        >
          {title}
        </Text>
      }
    </TouchableBox >
  )
}