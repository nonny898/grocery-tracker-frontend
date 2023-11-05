import { StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { screenStyles } from 'styles/screens';
import { useTranslation } from 'react-i18next';

import { useUser } from '@realm/react';
import { realmContext } from '../../../RealmContext';

import GeneralInputTextField from 'components/general/input/TextField';
import GeneralInputTagSelector from 'components/general/input/TagSelector';
import GeneralButtonPrimary from 'components/general/button/primary';
import GeneralButtonSecondary from 'components/general/button/secondary';
import { CreateListProp } from 'routes/types/Home';
import { List } from 'models/list.model';

import GROCERIES_TEMPLATE from 'templates/groceries.json';

const { useRealm } = realmContext;

const groceries = GROCERIES_TEMPLATE;

const computeTemplate = (template: string) => {
  switch (template) {
    case 'groceries':
      return groceries;
    default:
      return groceries;
  }
};

export default ({ navigation }: CreateListProp) => {
  const realm = useRealm();
  const user = useUser();

  const { t } = useTranslation();

  const templateOptions: { label: string; value: string }[] = [
    {
      label: t('template.groceries.title'),
      value: 'groceries',
    },
    {
      label: 'Test 1',
      value: 'custom 1',
    },
    {
      label: 'Test 2',
      value: 'custom 2',
    },
    {
      label: 'Test 3',
      value: 'custom 3',
    },
    {
      label: 'Test 4',
      value: 'custom 4',
    },
    {
      label: 'Test 5',
      value: 'custom 5',
    },
    {
      label: 'Test 6',
      value: 'custom 6',
    },
  ];

  const [name, setName] = useState('');
  const [template, setTemplate] = useState('groceries');

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
      <GeneralInputTagSelector
        title={t('list.form.templateTitle')}
        options={templateOptions}
        value={template}
        onChange={setTemplate}
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
