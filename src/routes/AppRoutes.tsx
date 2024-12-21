import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { HomeScreen } from '@screens';

export type RootStackParamList = {
  HomeScreen: undefined;
}

export const Stack = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={$StackScreenOptions}
      initialRouteName='HomeScreen'
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const $StackScreenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
};