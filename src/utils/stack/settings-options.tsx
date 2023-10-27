import StackHeader from 'utils/stack/settings-header';
import { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import { SettingsStackParamList } from 'routes/types/Settings';

export default ({ route }: StackScreenProps<SettingsStackParamList>): StackNavigationOptions => ({
  header: StackHeader,
});
