import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Home: undefined;
  Shopping: undefined;
  Tools: undefined;
  Settings: undefined;
};

export type HomeProp = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type ShoppingProp = BottomTabScreenProps<RootTabParamList, 'Shopping'>;
export type ToolsProp = BottomTabScreenProps<RootTabParamList, 'Tools'>;
export type SettingsProp = BottomTabScreenProps<RootTabParamList, 'Settings'>;
