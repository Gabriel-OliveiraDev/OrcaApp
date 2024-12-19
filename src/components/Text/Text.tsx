import React from "react";
import { createText } from "@shopify/restyle";

import { ThemeT } from "@theme";
import { $fontSizes, getFontFamily, TextVariants } from "./textConfigs";

const RText = createText<ThemeT>();
type RText = React.ComponentProps<typeof RText>;

export interface TextProps extends RText {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semibold?: boolean;
};

export function Text({
  preset = 'paragraphMedium',
  bold,
  italic,
  semibold,
  children,
  style,
  ...rest
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semibold);
  return (
    <RText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...rest}
    >
      {children}
    </RText>
  );
};