import { Button, Text, View } from 'react-native';
import { ShoppingProp } from 'routes/types/Root';
import { styles } from 'styles/screens';

export default ({ navigation }: ShoppingProp) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Shopping List</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.jumpTo('Home');
      }}
    />
  </View>
);
