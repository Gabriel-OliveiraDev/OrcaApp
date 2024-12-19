import { TextStyle } from "react-native";

export type TextVariants =
  | "headingLarge"
  | "headingMedium"
  | "headingSmall"

  | "paragraphLarge"
  | "paragraphMedium"
  | "paragraphSmall"

  | "paragraphCaption"
  | "paragraphCaptionSmall"
  ;

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
};

export const $fontFamily = {
  black: 'Kanit-Black',
  blackItalic: 'Kanit-BlackItalic',
  bold: 'Kanit-Bold',
  boldItalic: 'Kanit-BoldItalic',
  italic: 'Kanit-Italic',
  light: 'Kanit-Light',
  lightItalic: 'Kanit-LightItalic',
  medium: 'Kanit-Medium',
  mediumItalic: 'Kanit-MediumItalic',
  regular: 'Kanit-Regular',
};


export function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  };
};