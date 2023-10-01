import { BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList } from 'routes/types/Root';
import { Text } from 'react-native';

type TabBarLabelProps = {
  focused: boolean;
  color: string;
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const computeIconName = (
  routeName: string,
  focused: boolean
): typeof Ionicons.defaultProps.name => {
  switch (routeName) {
    case 'HomeScreen':
      return focused ? 'home' : 'home-outline';
    case 'ShoppingScreen':
      return focused ? 'basket' : 'basket-outline';
    case 'ToolsScreen':
      return focused ? 'calculator' : 'calculator-outline';
    case 'SettingsScreen':
      return focused ? 'cog' : 'cog-outline';
    default:
      return 'home';
  }
};

const computeLabelName = (routeName: string): string => {
  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'ShoppingScreen':
      return 'Shopping';
    case 'ToolsScreen':
      return 'Tools';
    case 'SettingsScreen':
      return 'Settings';
    default:
      return 'Home';
  }
};

export const navigatorOptions = ({
  route,
}: BottomTabScreenProps<RootTabParamList>): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarLabel: ({ focused, color }: TabBarLabelProps) => {
    let label = computeLabelName(route.name);
    return <Text style={{ color }}>{label}</Text>;
  },
  tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
    let iconName = computeIconName(route.name, focused);
    return <Ionicons name={iconName} color={color} size={size * 0.8} />;
  },
  tabBarInactiveTintColor: 'hsl(210, 31%, 80%)',
  tabBarStyle: {
    borderTopWidth: 1,
    borderTopColor: 'hsl(210, 31%, 95%)',
    backgroundColor: 'white',
  },
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarItemStyle: {
    paddingTop: 4,
    paddingBottom: 4,
  },
});
