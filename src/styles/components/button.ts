import { StyleSheet } from 'react-native';
import themes from 'styles/themes';

export const buttonStyle = StyleSheet.create({
  buttonContainer: {
    margin: 16,
    padding: 8,
    height: 48,
    borderRadius: 10,
    backgroundColor: themes.colors.primary.$06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontFamily: 'Prompt-Bold',
    fontSize: 16,
    color: themes.colors.neutralBlue.$10,
  },
});
