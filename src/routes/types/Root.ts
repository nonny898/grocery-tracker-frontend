import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  HomeScreen: undefined;
  ShoppingScreen: undefined;
  ToolsScreen: undefined;
  SettingsScreen: undefined;
};

export type HomeScreenProp = BottomTabScreenProps<RootTabParamList, 'HomeScreen'>;
export type ShoppingScreenProp = BottomTabScreenProps<RootTabParamList, 'ShoppingScreen'>;
export type ToolsScreenProp = BottomTabScreenProps<RootTabParamList, 'ToolsScreen'>;
export type SettingsScreenProp = BottomTabScreenProps<RootTabParamList, 'SettingsScreen'>;
