import Realm from 'realm';
import { List } from 'models/list.model';
import { View, Text } from 'react-native';

export default ({ name }: { name: string }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
