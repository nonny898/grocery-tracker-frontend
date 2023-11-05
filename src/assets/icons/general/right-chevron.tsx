import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default () => {
  return (
    <View style={{ paddingRight: 4 }}>
      <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <Path d="M6 12L10 8L6 4" stroke="#647ACB" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
};
