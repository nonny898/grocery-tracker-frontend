import StackHeader from 'components/layout/StackHeader';
import { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from 'routes/types/Home';

export default ({ route }: StackScreenProps<HomeStackParamList>): StackNavigationOptions => ({
  header: StackHeader,
});
