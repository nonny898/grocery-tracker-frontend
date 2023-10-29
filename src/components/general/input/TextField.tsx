// General text field component for the app.

import { View, TextInput, TextInputProps, StyleSheet, Text } from 'react-native';
import themes from 'styles/themes';

interface Props extends TextInputProps {
  label?: string;
}

const Label = ({ label }: { label: string }) => {
  return <Text style={formStyles.formFieldLabel}>{label}</Text>;
};

export default (props: Props) => {
  return (
    <View style={formStyles.formField}>
      {!!props.label && <Label label={props.label} />}
      <TextInput style={formStyles.formFieldInput} {...props} />
    </View>
  );
};

const formStyles = StyleSheet.create({
  formField: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  formFieldLabel: {
    width: 80,
    marginRight: 16,
    fontSize: 16,
    fontFamily: 'Prompt-Regular',
    color: themes.colors.secondary.$06,
  },
  formFieldInput: {
    fontFamily: 'Prompt-Regular',
    flex: 1,
    alignSelf: 'flex-end',
    fontSize: 16,
    width: '100%',
  },
});
