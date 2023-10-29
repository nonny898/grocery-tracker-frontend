import { StyleSheet } from 'react-native';
import themes from 'styles/themes';

export const buttonStyle = StyleSheet.create({
  buttonPrimaryContainer: {
    flexGrow: 1,
    margin: 16,
    padding: 8,
    height: 48,
    borderRadius: 10,
    backgroundColor: themes.colors.primary.$06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimaryTitle: {
    fontFamily: 'Prompt-Bold',
    fontSize: 16,
    color: themes.colors.neutralBlue.$10,
  },
  buttonSecondaryContainer: {
    flexGrow: 1,
    margin: 16,
    padding: 8,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themes.colors.primary.$06,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondaryTitle: {
    fontFamily: 'Prompt-Bold',
    fontSize: 16,
    color: themes.colors.primary.$06,
  },
});
