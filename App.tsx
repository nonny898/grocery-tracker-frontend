import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootTabParamList } from 'routes/types/Root';

import HomeScreen from 'screens/HomeScreen';
import SettingsScreen from 'screens/SettingsScreen';
import ListScreen from 'screens/ShoppingScreen';
import ToolsScreen from 'screens/ToolsScreen';

import LoginScreen from 'screens/LoginScreen';

import { theme } from 'styles/layout';
import { navigatorOptions } from './src/utils/tab';

import i18n from './src/localization/i18n';
import { useFonts } from 'expo-font';

import { appId, baseUrl } from './config.json';
import { AppProvider, UserProvider } from '@realm/react';
import { View, ActivityIndicator } from 'react-native';

import { realmContext } from './RealmContext';
import { fonts } from './fonts';
const { RealmProvider } = realmContext;

const initI18n = i18n;

const Tab = createBottomTabNavigator<RootTabParamList>();

const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color={theme.colors.primary} size="large" />
    </View>
  );
};

export const App = () => {
  return (
    <RealmProvider
      sync={{
        flexible: true,
        onError: (_, error) => {
          console.error(error);
        },
      }}
      fallback={LoadingIndicator}
    >
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <Tab.Navigator screenOptions={navigatorOptions}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ListScreen" component={ListScreen} />
            <Tab.Screen name="ToolsScreen" component={ToolsScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </RealmProvider>
  );
};

export default () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider id={appId} baseUrl={baseUrl}>
      <UserProvider fallback={LoginScreen}>
        <App />
      </UserProvider>
    </AppProvider>
  );
};
