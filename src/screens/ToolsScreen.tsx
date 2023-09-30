import { Button, Text, View } from 'react-native';
import { ToolsProp } from 'routes/types/Root';
import { styles } from 'styles/screens';

export default ({ navigation }: ToolsProp) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Tools</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.jumpTo('Shopping');
      }}
    />
  </View>
);
