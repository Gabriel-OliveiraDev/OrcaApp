import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './AppRoutes';
import { loadFonts } from '@utils';
import { LoadingScreen } from '@screens';

export function Router() {
  const loadedFonts = loadFonts()
  if (!loadedFonts) {
    return (
      <LoadingScreen />
    )
  }
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};