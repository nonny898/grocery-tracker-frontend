import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import themes from 'styles/themes';

interface Props {
  title: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export default (props: Props) => {
  return (
    <View style={tagSelectorStyles.container}>
      <Text style={tagSelectorStyles.title}>{props.title}</Text>
      <View style={tagSelectorStyles.tagsContainer}>
        {props.options.map((option) => {
          return (
            <TouchableOpacity
              style={[
                tagSelectorStyles.tagButtonContainer,
                props.value === option.value
                  ? tagSelectorStyles.activeTagButtonContainer
                  : tagSelectorStyles.inactiveTagButtonContainer,
              ]}
              key={option.value}
              onPress={() => props.onChange(option.value)}
            >
              <Text
                style={[
                  tagSelectorStyles.tagLabel,
                  props.value === option.value
                    ? tagSelectorStyles.activeTagLabel
                    : tagSelectorStyles.inactiveTagLabel,
                ]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const tagSelectorStyles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    marginVertical: 12,
    fontSize: 20,
    fontFamily: 'Prompt-Regular',
    color: themes.colors.secondary.$06,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tagButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  inactiveTagButtonContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  activeTagButtonContainer: {
    backgroundColor: themes.colors.primary.$10,
    borderWidth: 1,
    borderColor: themes.colors.primary.$07,
  },
  tagLabel: {
    fontSize: 16,
    fontFamily: 'Prompt-Medium',
  },
  inactiveTagLabel: {
    color: themes.colors.neutralBlue.$08,
  },
  activeTagLabel: {
    color: themes.colors.primary.$07,
  },
});
