import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    marginTop: 26,
    alignSelf: 'flex-start',
    display: 'flex',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'hsl(211, 39%, 23%)',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: 'hsl(211, 39%, 23%)',
    borderWidth: 1,
  },
  listText: {
    fontSize: 14,
    color: 'hsl(211, 39%, 23%)',
    padding: 8,
  },
});
