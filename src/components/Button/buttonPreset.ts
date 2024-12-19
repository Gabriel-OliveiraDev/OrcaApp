import { ThemeColorsT } from "@theme";
import { TouchableBoxProps } from "@types";
import { TextProps } from "../Text/Text";

export type ButtonPreset = 'primary' | 'outline' | 'ghost'

interface ButtonUI {
  container: TouchableBoxProps;
  content: { color: ThemeColorsT, textProps?: TextProps };
};


export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: { color: 'primaryContrast' },
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
        height: 48,
      },
      content: { color: 'gray2' },
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: { color: 'primary' },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
        height: 48,
      },
      content: { color: 'gray2' },
    },
  },
  ghost: {
    default: {
      container: {
        backgroundColor: 'white70',
      },
      content: {
        color: 'grayBlack',
        textProps: {
          preset: 'paragraphSmall',
          bold: false,
        },
      },
    },
    disabled: {
      container: {
        backgroundColor: 'grayWhite',
        height: 48,
      },
      content: { color: 'grayBlack' },
    },
  },
};
