import { ScrollView, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from 'routes/types/Home';

import HomeStackOptions from 'utils/stack/Home';

import ListHeader from 'components/list/Header';
import ListEmptyCard from 'components/list/EmptyCard';
import GeneralButtonPrimary from 'components/general/button/primary';

import { useTranslation } from 'react-i18next';
import { styles } from 'styles/screens';
import { useState } from 'react';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <ScrollView>
        <ListHeader title={t('list.activeList')} amount={count} />
        <ListEmptyCard />
        <GeneralButtonPrimary title={t('list.addNewList')} onPress={onPress} />
      </ScrollView>
    </View>
  );
};

export default () => {
  return (
    <Stack.Navigator screenOptions={HomeStackOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
