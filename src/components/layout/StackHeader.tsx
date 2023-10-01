import { getHeaderTitle } from '@react-navigation/elements';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/layout';
import { StackHeaderProps } from '@react-navigation/stack';

const computeScreenName = (routeName: string) => {
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'AddGrocery':
      return 'Add Grocery';
    default:
      return 'Home';
  }
};

export default ({ navigation, route, options }: StackHeaderProps) => {
  const { top } = useSafeAreaInsets();
  const title = getHeaderTitle(options, route.name);
  return (
    <View
      style={{
        ...styles.header,
        paddingTop: top,
      }}
    >
      {title === 'AddGrocery' ? (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Home')}>
          <Ionicons name={'chevron-back'} color={colors.primary} size={24} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.title}>{computeScreenName(title)}</Text>
      {title === 'Home' ? (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('AddGrocery')}>
          <Ionicons name={'add'} color={colors.primary} size={24} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: 'hsl(209, 23%, 60%)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 8,
    color: colors.primary,
  },
});
