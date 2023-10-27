import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from 'styles/layout';
import { useTranslation } from 'react-i18next';
import { StackHeaderProps } from '@react-navigation/stack';

const computeScreenName = (routeName: string) => {
  const { t } = useTranslation();
  if (routeName === 'Settings') {
    return t('settings.title');
  }
  return t('appName');
};

export default ({ route }: StackHeaderProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.header,
        paddingTop: top,
      }}
    >
      <Text style={styles.title}>{computeScreenName(route.name)}</Text>
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
