import { StackScreenProps } from '@react-navigation/stack';

export type SettingsStackParamList = {
  Settings: undefined;
  Profile: undefined;
};

export type SettingsProp = StackScreenProps<SettingsStackParamList, 'Settings'>;
