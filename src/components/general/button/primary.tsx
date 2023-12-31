import { Text, TouchableOpacity } from 'react-native';
import { buttonStyle } from 'styles/components/button';

const { buttonPrimaryContainer, buttonPrimaryTitle } = buttonStyle;

type Props = {
  title: string;
  onPress: () => void;
};

export default ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={buttonPrimaryContainer} activeOpacity={0.75} onPress={onPress}>
      <Text style={buttonPrimaryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
