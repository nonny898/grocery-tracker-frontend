import { Button, Text, ScrollView, View, ViewBase } from 'react-native';
import { styles } from 'styles/screens';

import MOCK from 'mock/shopping-data.json';
import { useState } from 'react';
import GroceryCard from 'components/card/GroceryCard';

const handleFilterInCart = (inCart: boolean) => MOCK.filter((item) => item.is_in_cart === inCart);

export default () => {
  const [inList] = useState(handleFilterInCart(false));
  const [inCart] = useState(handleFilterInCart(true));

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>To Buy Items</Text>
        </View>
        {inList.map((item) => (
          <GroceryCard key={item.id} item={item} />
        ))}
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>In Cart Items</Text>
        </View>
        {inCart.map((item) => (
          <Text key={item.id}>{item.item_name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};
