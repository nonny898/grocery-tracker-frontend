import { ScrollView, Text, View } from 'react-native';
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
    navigation.navigate('ListScreen');
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

  const [count] = useState(lists.length);
  const { t } = useTranslation();

  return (
    <View style={screenStyles.screen}>
      <ScrollView>
        <ListHeader title={t('list.activeList')} amount={count} />
        {count !== 0 ? <EmptyList {...props} /> : null}
        <Text>{JSON.stringify(lists)}</Text>
        {lists.map((list) => {
          return <ListCard key={list._id.toString()} name={list.name} />;
        })}
      </ScrollView>
    </View>
  );
};

export default () => {
  return (
    <Stack.Navigator screenOptions={HomeStackOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateList" component={CreateListContainer} />
    </Stack.Navigator>
  );
};
