import { Text, View } from 'react-native';
import { cardStyles } from 'styles/components/card';

import IconListFileSearch from 'assets/icons/list/file-search';
import { useTranslation } from 'react-i18next';

const { container, emptyContainer, emptyTitle, emptySubtitle } = cardStyles;

export default () => {
  const { t } = useTranslation();
  return (
    <View style={{ ...container, ...emptyContainer }}>
      <IconListFileSearch />
      <View>
        <Text style={emptyTitle}>{t('list.noListTitle')}</Text>
        <Text style={emptySubtitle}>{t('list.noListDescription')}</Text>
      </View>
    </View>
  );
};
