import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeProp, HomeStackParamList } from 'routes/types/Home';

import HomeStackOptions from 'utils/stack/Home';

import ListHeader from 'components/list/Header';
import ListEmptyCard from 'components/list/EmptyCard';
import GeneralButtonPrimary from 'components/general/button/primary';

import CreateListContainer from 'containers/list/Create';

import ListCard from 'components/list/Card';

import { useTranslation } from 'react-i18next';
import { screenStyles } from 'styles/screens';
import { useEffect, useState } from 'react';

import { realmContext } from '../../RealmContext';
import { List } from 'models/list.model';

const { useRealm, useQuery } = realmContext;

const Stack = createStackNavigator<HomeStackParamList>();

const EmptyList = ({ navigation }: HomeProp) => {
  const { t } = useTranslation();

  const handleCreate = () => {
    navigation.navigate('CreateList');
  };

  return (
    <>
      <ListEmptyCard />
      <GeneralButtonPrimary title={t('list.addNewList')} onPress={handleCreate} />
    </>
  );
};

const HomeScreen = (props: HomeProp) => {
  const realm = useRealm();

  const lists = useQuery<List>('List').sorted('_id');

  useEffect(() => {
    realm.subscriptions.update((mutableSubs) => {
      mutableSubs.add(realm.objects(List), { name: 'lists' });
    });
  });

  const count = lists.length;
  const { t } = useTranslation();

  return (
    <View style={screenStyles.screen}>
      <ScrollView>
        <ListHeader title={t('list.activeList')} amount={count} />
        {count === 0 ? (
          <EmptyList {...props} />
        ) : (
          <View style={listContainerStyle.container}>
            {lists.map((list) => {
              return <ListCard key={list._id.toString()} name={list.name} />;
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const listContainerStyle = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 8,
  },
});

export default () => {
  return (
    <Stack.Navigator screenOptions={HomeStackOptions}>
      <Stack.Screen name="CreateList" component={CreateListContainer} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
