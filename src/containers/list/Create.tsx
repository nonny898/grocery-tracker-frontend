import { StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { screenStyles } from 'styles/screens';
import { useTranslation } from 'react-i18next';

import { useUser } from '@realm/react';
import { realmContext } from '../../../RealmContext';

import GeneralInputTextField from 'components/general/input/TextField';
import GeneralButtonPrimary from 'components/general/button/primary';
import GeneralButtonSecondary from 'components/general/button/secondary';
import { CreateListProp } from 'routes/types/Home';
import { List } from 'models/list.model';

const { useRealm } = realmContext;

export default ({ navigation }: CreateListProp) => {
  const realm = useRealm();
  const user = useUser();

  const { t } = useTranslation();

  const [name, setName] = useState('');

  useEffect(() => {
    realm.subscriptions.update((mutableSubs) => {
      mutableSubs.add(realm.objects(List), { name: 'lists' });
    });
  });

  const handleCreateList = useCallback(
    ({ name }: { name: string }) => {
      realm.write(() => {
        realm.create('List', {
          name,
          owner_id: user?.id,
        });
      });
      navigation.navigate('Home');
    },
    [realm]
  );

  return (
    <View style={styles.container}>
      <Text style={screenStyles.title}>{t('list.form.addTitle')}</Text>
      <GeneralInputTextField
        label={t('list.form.nameLabel')}
        placeholder={t('list.form.namePlaceholder')}
        value={name}
        onChangeText={setName}
      />
      <GeneralInputTextField
        label={t('list.form.descriptionLabel')}
        placeholder={t('list.form.descriptionPlaceholder')}
      />

      <View style={styles.cta}>
        <View style={styles.buttonContainter}>
          <GeneralButtonSecondary
            title={t('list.form.cancelButton')}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <View style={styles.buttonContainter}>
          <GeneralButtonPrimary
            title={t('list.form.addButton')}
            onPress={() => handleCreateList({ name })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    marginHorizontal: 16,
  },
  cta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainter: {
    width: '50%',
  },
});
