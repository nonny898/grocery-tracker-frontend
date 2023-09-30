import { getHeaderTitle } from '@react-navigation/elements';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/layout';

type TabHeader = {
  title: string;
};

export default ({ route, options }: BottomTabHeaderProps) => {
  const { top } = useSafeAreaInsets();
  const title = getHeaderTitle(options, route.name);
  return (
    <View
      style={{
        ...styles.header,
        paddingTop: top,
      }}
    >
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity activeOpacity={0.7}>
        <Ionicons name={'add'} color={colors.primary} size={32} />
      </TouchableOpacity>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 8,
    color: colors.primary,
  },
});
