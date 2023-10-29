import { StackScreenProps } from '@react-navigation/stack';

export type HomeStackParamList = {
  Home: undefined;
  CreateList: undefined;
};

export type HomeProp = StackScreenProps<HomeStackParamList, 'Home'>;
export type CreateListProp = StackScreenProps<HomeStackParamList, 'CreateList'>;
