// General text field component for the app.

import { View, TextInput, TextInputProps, StyleSheet } from 'react-native';

export default (props: TextInputProps) => {
  return (
    <View style={formStyles.formField}>
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
  formFieldInput: {
    flex: 1,
    alignSelf: 'flex-end',
    fontSize: 16,
    width: '100%',
  },
});
