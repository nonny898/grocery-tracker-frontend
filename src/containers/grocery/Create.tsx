import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { screenStyles } from 'styles/screens';
import { Ionicons } from '@expo/vector-icons';
import { colors } from 'styles/layout';

export default () => {
  return (
    <View style={screenStyles.screen}>
      <View style={formStyles.form}>
        <View style={formStyles.formField}>
          <Text style={formStyles.formFieldLabel}>Name</Text>
          <TextInput
            style={formStyles.formFieldInput}
            placeholder="Name"
            placeholderTextColor="hsl(212, 33%, 89%)"
          />
        </View>
        <View style={formStyles.formField}>
          <Text style={formStyles.formFieldLabel}>Brand</Text>
          <TextInput
            style={formStyles.formFieldInput}
            placeholder="Brand"
            placeholderTextColor="hsl(212, 33%, 89%)"
          />
        </View>

        <View style={formStyles.formNumberField}>
          <Text style={formStyles.formFieldLabel}>Quantity</Text>
          <View style={formStyles.formFieldNumberInput}>
            <TouchableOpacity style={formStyles.formFieldButton}>
              <Ionicons name={'remove'} color={colors.primary} size={20} />
            </TouchableOpacity>
            <Text style={formStyles.formFieldNumberCount}>1</Text>
            <TouchableOpacity style={formStyles.formFieldButton}>
              <Ionicons name={'add'} color={colors.primary} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={formStyles.formCta}>
        <TouchableOpacity style={formStyles.formFieldCta}>
          <Text style={{ ...formStyles.formLabelCta, color: colors.primary }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...formStyles.formFieldCta, ...formStyles.formFieldCtaPrimary }}>
          <Text style={{ ...formStyles.formLabelCta, color: 'white' }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formStyles = StyleSheet.create({
  form: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  formField: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  formNumberField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  formFieldLabel: {
    width: 80,
    marginRight: 16,
    fontSize: 16,
    fontWeight: '600',
    color: 'hsl(211, 39%, 23%)',
  },
  formFieldInput: {
    flex: 1,
    alignSelf: 'flex-end',
    fontSize: 16,
    width: '100%',
  },
  formFieldNumberInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formFieldButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  formFieldNumberCount: {
    marginHorizontal: 16,
    fontSize: 16,
  },
  formCta: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  formFieldCta: {
    width: '30%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primary,
    marginHorizontal: 8,
  },
  formFieldCtaPrimary: {
    backgroundColor: colors.primary,
  },
  formLabelCta: {
    fontSize: 16,
    fontWeight: '600',
  },
});
