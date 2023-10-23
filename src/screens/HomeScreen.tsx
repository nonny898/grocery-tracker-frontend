import { ScrollView, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from 'routes/types/Home';

import HomeStackOptions from 'utils/stack/Home';

import ListHeader from 'components/list/Header';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <ScrollView>
        <ListHeader title={t('list.activeList')} amount={10} />
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
