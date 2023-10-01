import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootTabParamList } from 'routes/types/Root';

import HomeScreen from 'screens/HomeScreen';
import SettingsScreen from 'screens/SettingsScreen';
import ShoppingScreen from 'screens/ShoppingScreen';
import ToolsScreen from 'screens/ToolsScreen';

import { theme } from 'styles/layout';
import { navigatorOptions } from 'utils/Tab';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={navigatorOptions}>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="ShoppingScreen" component={ShoppingScreen} />
          <Tab.Screen name="ToolsScreen" component={ToolsScreen} />
          <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
