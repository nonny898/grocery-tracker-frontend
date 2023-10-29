import { Text, TouchableOpacity } from 'react-native';
import { buttonStyle } from 'styles/components/button';

const { buttonSecondaryContainer, buttonSecondaryTitle } = buttonStyle;

type Props = {
  title: string;
  onPress: () => void;
};

export default ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={buttonSecondaryContainer} activeOpacity={0.75} onPress={onPress}>
      <Text style={buttonSecondaryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
