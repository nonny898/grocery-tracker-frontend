import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from 'styles/screens';

import SettingsStackOptions from 'utils/stack/Settings';
import { SettingsStackParamList } from 'routes/types/Settings';

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
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
