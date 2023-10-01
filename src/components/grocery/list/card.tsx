import GeneralCard from 'components/general/card';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from 'styles/layout';
import { ShoppingListInterface } from 'types/interface/shopping-list';
import { Ionicons } from '@expo/vector-icons';

export default ({ item }: { item: ShoppingListInterface }) => {
  return (
    <GeneralCard
      children={[
        <View style={styles.productInfo} key={'product-info'}>
          <View style={styles.productImage}>
            <Ionicons name={'fast-food-outline'} color={colors.primary} size={24} />
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.name}>{item.item_name}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>
        </View>,
        <View key={'product-quantity'}>
          <Text style={styles.quantity}>x{item.quantity}</Text>
        </View>,
      ]}
    />
  );
};

const styles = StyleSheet.create({
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
