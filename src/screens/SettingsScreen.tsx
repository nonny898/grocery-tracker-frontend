import { useCallback, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { screenStyles } from 'styles/screens';

import SettingsStackOptions from 'utils/stack/settings-options';
import { SettingsStackParamList } from 'routes/types/Settings';

import { useUser } from '@realm/react';
import { useFocusEffect } from '@react-navigation/native';

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsScreen = () => {
  const user = useUser();

  const [customUserData, setCustomUserData] = useState();

  const readCurrentCustomUserData = () => {
    setCustomUserData(user.customData as any);
  };

  useFocusEffect(
    useCallback(() => {
      console.log('🚀 ~ SettingsScreen ~ first:');
    }, [])
  );

  useEffect(() => {
    readCurrentCustomUserData();
    console.log('customUserData :>> ', customUserData);
  }, []);

  return (
    <View style={screenStyles.screen}>
      <Text>Settings Screen</Text>
      <Button title="Go to Settings" />
    </View>
  );
};

export default () => {
  return (
    <Stack.Navigator screenOptions={SettingsStackOptions}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
