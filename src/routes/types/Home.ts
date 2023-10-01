import { StackScreenProps } from '@react-navigation/stack';

export type HomeStackParamList = {
  Home: undefined;
  AddGrocery: undefined;
};

export type HomeProp = StackScreenProps<HomeStackParamList, 'Home'>;
export type AddGroceryProp = StackScreenProps<HomeStackParamList, 'AddGrocery'>;
