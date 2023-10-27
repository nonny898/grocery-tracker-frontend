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

import { appId, baseUrl } from './atlasConfig.json';
import { AppProvider, UserProvider } from '@realm/react';

const initI18n = i18n;

const fonts = {
  'Prompt-Black': require('./src/assets/fonts/Prompt-Black.ttf'),
  'Prompt-BlackItalic': require('./src/assets/fonts/Prompt-BlackItalic.ttf'),
  'Prompt-Bold': require('./src/assets/fonts/Prompt-Bold.ttf'),
  'Prompt-BoldItalic': require('./src/assets/fonts/Prompt-BoldItalic.ttf'),
  'Prompt-ExtraBold': require('./src/assets/fonts/Prompt-ExtraBold.ttf'),
  'Prompt-ExtraBoldItalic': require('./src/assets/fonts/Prompt-ExtraBoldItalic.ttf'),
  'Prompt-ExtraLight': require('./src/assets/fonts/Prompt-ExtraLight.ttf'),
  'Prompt-ExtraLightItalic': require('./src/assets/fonts/Prompt-ExtraLightItalic.ttf'),
  'Prompt-Italic': require('./src/assets/fonts/Prompt-Italic.ttf'),
  'Prompt-Light': require('./src/assets/fonts/Prompt-Light.ttf'),
  'Prompt-LightItalic': require('./src/assets/fonts/Prompt-LightItalic.ttf'),
  'Prompt-Medium': require('./src/assets/fonts/Prompt-Medium.ttf'),
  'Prompt-MediumItalic': require('./src/assets/fonts/Prompt-MediumItalic.ttf'),
  'Prompt-Regular': require('./src/assets/fonts/Prompt-Regular.ttf'),
  'Prompt-SemiBold': require('./src/assets/fonts/Prompt-SemiBold.ttf'),
  'Prompt-SemiBoldItalic': require('./src/assets/fonts/Prompt-SemiBoldItalic.ttf'),
  'Prompt-Thin': require('./src/assets/fonts/Prompt-Thin.ttf'),
  'Prompt-ThinItalic': require('./src/assets/fonts/Prompt-ThinItalic.ttf'),
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const App = () => {
  return (
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
