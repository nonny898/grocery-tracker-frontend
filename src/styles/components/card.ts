import { Platform, StyleSheet } from 'react-native';
import themes from 'styles/themes';

const platform = Platform.OS;

const cardShadow = {
  shadowColor: themes.colors.secondary.$10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 4,
};

const emptyStyles = {
  emptyContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderWidth: platform === 'android' ? 2 : 0,
    borderColor: platform === 'android' ? themes.colors.secondary.$10 : undefined,
    ...cardShadow,
  },
  emptyTitle: {
    fontFamily: 'Prompt-Medium',
    fontSize: 20,
    color: themes.colors.neutralBlue.$03,
  },
  emptySubtitle: {
    fontFamily: 'Prompt-Light',
    fontSize: 12,
    color: themes.colors.neutralBlue.$03,
  },
};

export const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 16,
  },
  ...emptyStyles,
});

export const listCardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    ...cardShadow,
  },
  name: {
    fontFamily: 'Prompt-Regular',
    fontSize: 14,
    color: themes.colors.secondary.$03,
  },
});
