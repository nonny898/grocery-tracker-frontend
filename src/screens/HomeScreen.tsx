import { Text, ScrollView, View } from 'react-native';
import { useState } from 'react';
import { styles } from 'styles/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from 'routes/types/Home';

import GroceryListCard from 'components/grocery/list/card';

import MOCK from 'mock/shopping-data.json';
import HomeStackOptions from 'utils/stack/Home';

const Stack = createStackNavigator<HomeStackParamList>();

const handleFilterInCart = (inCart: boolean) => MOCK.filter((item) => item.is_in_cart === inCart);

const HomeScreen = () => {
  const [inList] = useState(handleFilterInCart(false));
  const [inCart] = useState(handleFilterInCart(true));

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>To Buy Items</Text>
        </View>
        {inList.map((item) => (
          <GroceryListCard key={item.id} item={item} />
        ))}
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>In Cart Items</Text>
        </View>
        {inCart.map((item) => (
          <GroceryListCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const AddGroceryScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Add Grocery Item to the current list</Text>
      </View>
    </View>
  );
};

export default () => {
  return (
    <Stack.Navigator screenOptions={HomeStackOptions}>
      <Stack.Screen name="AddGrocery" component={AddGroceryScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
