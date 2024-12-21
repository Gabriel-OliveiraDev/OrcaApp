import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from './AppRoutes'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
};

export type AppScreenProps<RouteName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, RouteName>;