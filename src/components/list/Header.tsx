import { View, Text, StyleSheet } from 'react-native';
import Themes from '../../styles/themes';

import IconListFile from '../../assets/icons/list/file';

export default ({ title, amount }: { title: string; amount: number }) => {
  return (
    <View style={styles.container}>
      <IconListFile />
      <Text style={styles.title}>{title}</Text>
      {amount ? (
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  title: {
    color: Themes.colors.primary.$06,
    fontFamily: 'Prompt-Bold',
    fontSize: 16,
  },
  amountContainer: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: Themes.colors.primary.$10,
    borderRadius: 6,
  },
  amount: {
    fontFamily: 'Prompt-Medium',
    color: Themes.colors.primary.$06,
  },
});
