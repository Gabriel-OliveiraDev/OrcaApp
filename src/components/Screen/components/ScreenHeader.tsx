import React from "react";
import { } from 'react-native';

import { Box, TouchableBox } from '../../Box/Box';
import { Text } from '../../Text/Text';
import { BoxProps } from '@types';
import { ScreenProps } from "../Screen";
import { useNavigation } from "@react-navigation/native";

type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' |
  'title' |
  'headerComponent'>
  & BoxProps;

export function ScreenHeader({
  canGoBack,
  title,
  headerComponent,
  ...rest
}: ScreenHeaderProps) {

  const navigation = useNavigation()
  if (!title && !canGoBack && !headerComponent) return null;

  const showLabel = !title && !headerComponent;

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      my='s24'
      {...rest}
    >
      {canGoBack && (
        <TouchableBox
          flexDirection="row"
          alignContent="center"
          onPress={navigation.goBack}
        >
          {showLabel && (
            <Text preset="paragraphMedium" semibold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableBox>
      )}
      {headerComponent}
      {title && (<Text preset="headingMedium">{title}</Text>)}
    </Box>
  );
};