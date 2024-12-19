const palette = {
  // Grays
  grayBlack: '#000000',
  black60: 'rgba(0,0,0,0.6)',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',

  // Greens
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',

  // Blues
  bluePrimary: '#1E3A8A',
  bluePrimaryLight: '#E0E7FF',
  blueSuccess: '#2563EB',
  blueSuccessLight: '#D6E8FF',

  // Reds
  redError: '#EA3838',
  redErrorLight: '#FBECEC',
};

const blueTheme = {
  ...palette,
  primary: palette.bluePrimary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.bluePrimary,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  error: palette.redError,
  errorLight: palette.redErrorLight,

  success: palette.blueSuccess,
  successLight: palette.blueSuccessLight,

  paragrapgh: palette.gray1,
  paragraphSecondary: palette.gray2,

  iconColor: palette.bluePrimary,
  iconFillColor: palette.grayWhite,

  onBackgroundGray1: palette.gray1,
  onBackgroundGray2: palette.gray4,
};

const greenTheme: typeof blueTheme = {
  ...palette,
  primary: palette.greenPrimary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.greenPrimary,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  error: palette.redError,
  errorLight: palette.redErrorLight,

  success: palette.blueSuccess,
  successLight: palette.blueSuccessLight,

  paragrapgh: palette.gray1,
  paragraphSecondary: palette.gray2,

  iconColor: palette.greenPrimary,
  iconFillColor: palette.grayWhite,

  onBackgroundGray1: palette.gray1,
  onBackgroundGray2: palette.gray4,
}

export const colors = { palette, blueTheme, greenTheme };