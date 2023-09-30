import { BottomTabNavigationOptions, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList } from 'routes/types/Root';
import TabHeader from 'components/layout/TabHeader';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export const navigatorOptions = ({
  route,
}: BottomTabScreenProps<RootTabParamList>): BottomTabNavigationOptions => ({
  header: TabHeader,
  tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
    let iconName: typeof Ionicons.defaultProps.name;
    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Shopping') {
      iconName = focused ? 'basket' : 'basket-outline';
    } else if (route.name === 'Tools') {
      iconName = focused ? 'calculator' : 'calculator-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'cog' : 'cog-outline';
    }

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
