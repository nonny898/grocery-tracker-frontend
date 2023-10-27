import { Text, TouchableOpacity } from 'react-native';
import { buttonStyle } from 'styles/components/button';

const { buttonContainer, buttonTitle } = buttonStyle;

type Props = {
  title: string;
  onPress: () => void;
};

export default ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={buttonContainer} activeOpacity={0.75} onPress={onPress}>
      <Text style={buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
