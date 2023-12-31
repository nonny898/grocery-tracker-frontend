import { Text, View, StyleSheet } from 'react-native';
import { colors } from 'styles/layout';
import { ShoppingListInterface } from 'types/interface/shopping-list';
import { Ionicons } from '@expo/vector-icons';

export default ({ item }: { item: ShoppingListInterface }) => {
  return (
    <View style={styles.card}>
      <View style={styles.productInfo}>
        <View style={styles.productImage}>
          <Ionicons name={'fast-food-outline'} color={colors.primary} size={24} />
        </View>
        <View style={styles.productDetail}>
          <Text style={styles.name}>{item.item_name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>
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
    shadowColor: 'hsl(209, 23%, 60%)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android
  },
  productInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    marginRight: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'hsl(185, 94%, 87%)',
  },
  productDetail: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: 'hsl(211, 39%, 23%)',
  },
  brand: {
    fontSize: 14,
    color: 'hsl(210, 31%, 80%)',
    paddingTop: 4,
  },
  quantity: {
    fontSize: 16,
    color: 'hsl(227, 50%, 59%)',
    marginLeft: 16,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'hsl(227, 50%, 59%)',
  },
});
