import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ListStackParamList } from 'routes/types/List';
import { styles } from 'styles/screens';
import ListStackOptions from 'utils/stack/List';
import MOCK from 'mock/shopping-data.json';
import GroceryListCard from 'components/grocery/list/card';

const Stack = createStackNavigator<ListStackParamList>();

const handleFilterInCart = (inCart: boolean) => MOCK.filter((item) => item.is_in_cart === inCart);

const lists = [
  {
    name: 'Shopping',
  },
  {
    name: 'Chores',
  },
  {
    name: 'Outing Plans',
  },
  {
    name: 'Work Stuff',
  },
  {
    name: 'Work 1 Stuff',
  },
  {
    name: 'Work 2 Stuff',
  },
  {
    name: 'Work 3 Stuff',
  },
  {
    name: 'Work 4 Stuff',
  },
];

const ListsScreen = () => {
  const [inList] = useState(handleFilterInCart(false));
  const [inCart] = useState(handleFilterInCart(true));

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={{ paddingTop: 16 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {lists.map((list) => (
              <View key={list.name} style={styles.list}>
                <Text style={styles.listText}>{list.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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

export default () => (
  <Stack.Navigator screenOptions={ListStackOptions}>
    <Stack.Screen name="List" component={ListsScreen} />
  </Stack.Navigator>
);
