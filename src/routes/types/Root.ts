import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  HomeScreen: undefined;
  ListScreen: undefined;
  ToolsScreen: undefined;
  SettingsScreen: undefined;
};

export type HomeScreenProp = BottomTabScreenProps<RootTabParamList, 'HomeScreen'>;
export type ListScreenProp = BottomTabScreenProps<RootTabParamList, 'ListScreen'>;
export type ToolsScreenProp = BottomTabScreenProps<RootTabParamList, 'ToolsScreen'>;
export type SettingsScreenProp = BottomTabScreenProps<RootTabParamList, 'SettingsScreen'>;
