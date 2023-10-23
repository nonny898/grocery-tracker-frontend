import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/layout';
import { useTranslation } from 'react-i18next';

const computeScreenName = () => {
  const { t } = useTranslation();
  return t('appName');
};

export default () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.header,
        paddingTop: top,
      }}
    >
      <Text style={styles.title}>{computeScreenName()}</Text>
      <View style={groupStyles.container}>
        <Text style={groupStyles.name}>กลุ่มแรก</Text>
        <Ionicons name={'chevron-down'} color="hsla(225, 57%, 67%, 1)" size={12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'hsla(212, 33%, 89%, 1)',
  },
  title: {
    fontFamily: 'Prompt-SemiBold',
    fontSize: 24,
    paddingBottom: 8,
    color: colors.primary,
  },
});

const groupStyles = StyleSheet.create({
  container: {
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    fontFamily: 'Prompt-Medium',
    color: 'hsla(225, 57%, 67%, 1)',
    fontSize: 12,
    paddingRight: 4,
  },
});
