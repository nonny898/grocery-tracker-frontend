import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootTabParamList } from 'routes/types/Root';

import Home from 'screens/HomeScreen';
import SettingsScreen from 'screens/SettingsScreen';
import ShoppingScreen from 'screens/ShoppingScreen';
import ToolsScreen from 'screens/ToolsScreen';

import { theme } from 'styles/layout';
import { navigatorOptions } from 'utils/tab';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={navigatorOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Shopping" component={ShoppingScreen} />
          <Tab.Screen name="Tools" component={ToolsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
