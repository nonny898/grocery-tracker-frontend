import { Text, View, StyleSheet } from 'react-native';
import { ShoppingListInterface } from 'types/interface/shopping-list';

export default ({ item }: { item: ShoppingListInterface }) => {
  return (
    <View style={styles.card}>
      <View style={styles.productInfo}>
        <View style={styles.productDetail}>
          <Text style={styles.name}>{item.item_name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
        <Text style={styles.totalPrice}>{item.total_price}</Text>
      </View>
      <View>
        <Text style={styles.quantity}>x{item.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfo: {
    flex: 1,
  },
  productDetail: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 14,
    color: 'gray',
    paddingTop: 4,
  },
  quantity: {
    fontSize: 18,
    color: 'green',
    marginLeft: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
