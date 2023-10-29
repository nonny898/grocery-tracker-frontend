import { Switch, SwitchProps, View } from 'react-native';

export default (props: SwitchProps) => {
  return (
    <View>
      <Switch
        {...props}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={props.value ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};
