import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box } from '../Box/Box';
import { BoxProps } from '@types';
import { ViewContainer, ScrollContainer } from './components';
import { useAppSafeArea, useAppTheme } from '@hooks';

export interface ScreenProps extends BoxProps {
  scrollable?: boolean
  noPaddingHorizontal?: boolean
}

export function Screen({
  children,
  scrollable,
  style,
  noPaddingHorizontal = false,
  ...rest }: ScreenProps) {

  const { bottom, top } = useAppSafeArea()
  const { colors } = useAppTheme()
  const Container = scrollable ? ScrollContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container backgroundColor={colors.background}>
        <Box
          backgroundColor={rest.backgroundColor || 'background'}
          flex={1}
          paddingHorizontal={noPaddingHorizontal ? undefined : 's40'}
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...rest}
        >
          {children}
        </Box >
      </Container>
    </KeyboardAvoidingView>
  );
};