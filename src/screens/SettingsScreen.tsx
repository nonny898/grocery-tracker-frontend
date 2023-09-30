import { Button, Text, View } from 'react-native';
import { SettingsProp } from 'routes/types/Root';
import { styles } from 'styles/screens';

export default ({ navigation }: SettingsProp) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Settings</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.jumpTo('Shopping');
      }}
    />
  </View>
);
