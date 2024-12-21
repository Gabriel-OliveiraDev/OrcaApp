import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { LoadingScreen, HomeScreen } from '@screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  LoadingScreen: undefined;
}

export const Stack = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={$StackScreenOptions}
      initialRouteName='HomeScreen'
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    </Stack.Navigator>
  );
};

const $StackScreenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};