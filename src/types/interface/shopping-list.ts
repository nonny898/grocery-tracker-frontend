export interface ShoppingListInterface {
  id: string;
  item_name: string;
  quantity: number;
  unit_price: number;
  discount: number;
  total_price: number;
  category: string;
  brand: string;
  expiry_date: string;
  is_organic: boolean;
  is_gluten_free: boolean;
  is_in_cart: boolean;
  created_at: string;
}
