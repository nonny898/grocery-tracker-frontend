import { BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from 'routes/types/Root';
import { StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import IconNavigationHome from '../assets/icons/navigation/home';
import IconNavigationList from '../assets/icons/navigation/list';
import IconNavigationTools from '../assets/icons/navigation/tools';
import IconNavigationSettings from '../assets/icons/navigation/settings';

type TabBarLabelProps = {
  focused: boolean;
  color: string;
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const computeIconName = (routeName: string, color: string) => {
  switch (routeName) {
    case 'HomeScreen':
      return <IconNavigationHome color={color} />;
    case 'ListScreen':
      return <IconNavigationList color={color} />;
    case 'ToolsScreen':
      return <IconNavigationTools color={color} />;
    default:
      return <IconNavigationSettings color={color} />;
  }
};

const computeLabelName = (routeName: string): string => {
  const { t } = useTranslation();
  switch (routeName) {
    case 'HomeScreen':
      return t('tab.home');
    case 'ListScreen':
      return t('tab.list');
    case 'ToolsScreen':
      return t('tab.tools');
    case 'SettingsScreen':
      return t('tab.settings');
    default:
      return 'Home';
  }
};

export const navigatorOptions = ({
  route,
}: BottomTabScreenProps<RootTabParamList>): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarLabel: ({ color }: TabBarLabelProps) => {
    let label = computeLabelName(route.name);
    return <Text style={{ color, ...styles.tabBarLabel }}>{label}</Text>;
  },
  tabBarIcon: ({ color }: TabBarIconProps) => {
    const icon = computeIconName(route.name, color);
    return icon;
  },
  tabBarInactiveTintColor: 'hsla(210, 22%, 49%, 1)',
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: 'white',
    elevation: 0,
  },
  tabBarHideOnKeyboard: true,
});

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    fontFamily: 'Prompt-Medium',
  },
});
