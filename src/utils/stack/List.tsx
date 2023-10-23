import StackHeader from 'components/layout/StackHeader';
import { StackNavigationOptions } from '@react-navigation/stack';

export default (): StackNavigationOptions => ({
  header: StackHeader,
});
