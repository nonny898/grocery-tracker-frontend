import RightChevron from 'assets/icons/general/right-chevron';
import { View, Text } from 'react-native';
import { listCardStyles } from 'styles/components/card';

export default ({ name }: { name: string }) => {
  return (
    <View style={listCardStyles.container}>
      <Text style={listCardStyles.name}>{name}</Text>
      <RightChevron />
    </View>
  );
};
