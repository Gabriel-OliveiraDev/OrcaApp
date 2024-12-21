import React, { useRef } from "react";
import { TextInput, TextInputProps, TextStyle } from "react-native";
import { colors } from "@theme";
import { BoxProps } from "@types";
import { Box, PressableBox } from "../Box/Box";
import { Text } from "../Text/Text";
import { $fontFamily, $fontSizes } from "../Text/textPreset";

export interface InputProps extends TextInputProps {
  boxProps?: BoxProps;
  label?: string;
  errorMessage?: string;
  containerProps?: string;
  error?: boolean
};

export function Input({
  boxProps,
  label,
  placeholder,
  errorMessage,
  error,
  ...rest
}: InputProps) {
  const inputRef = useRef<TextInput>(null);

  function focusEvent() {
    inputRef.current?.focus();
  }

  return (
    <Box
      paddingHorizontal="s16"
      alignItems="flex-start"
      height={100}
      width={"100%"}
      {...boxProps}
    >
      <Text
        marginBottom="s4"
        marginLeft="s16"
        preset="paragraphMedium"
        color="grayBlack"
      >
        {label}
      </Text>

      <PressableBox
        width={"100%"}
        height={56}
        padding='s16'
        borderRadius="s12"
        borderColor="gray3"
        borderWidth={1}
        onPress={() => focusEvent()}
      >
        <TextInput
          autoCapitalize="none"
          placeholderTextColor={colors.palette.gray2}
          style={$textInputStyle}
          placeholder={placeholder}
          {...rest}
          ref={inputRef}
        />
      </PressableBox>

      {
        error && (
          <Text
            marginLeft="s16"
            preset="paragraphCaption"
            color="error"
          >
            {errorMessage}
          </Text>
        )
      }
    </Box >
  );
};

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphLarge
}