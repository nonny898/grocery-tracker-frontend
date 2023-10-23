import { View } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

export default ({ color }: { color: string }) => {
  return (
    <View>
      <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
        <G id="home-02">
          <Path
            id="Icon"
            d="M9.125 20.7331V13.3331C9.125 12.7731 9.125 12.4931 9.23399 12.2791C9.32987 12.091 9.48285 11.938 9.67101 11.8421C9.88492 11.7331 10.1649 11.7331 10.725 11.7331H13.525C14.0851 11.7331 14.3651 11.7331 14.579 11.8421C14.7672 11.938 14.9201 12.091 15.016 12.2791C15.125 12.4931 15.125 12.7731 15.125 13.3331V20.7331M11.1427 2.49715L4.36039 7.77228C3.90702 8.1249 3.68034 8.30121 3.51703 8.52201C3.37237 8.7176 3.2646 8.93794 3.19903 9.17221C3.125 9.43667 3.125 9.72385 3.125 10.2982V17.5331C3.125 18.6532 3.125 19.2133 3.34299 19.6411C3.53473 20.0174 3.84069 20.3234 4.21702 20.5152C4.64484 20.7331 5.20489 20.7331 6.325 20.7331H17.925C19.0451 20.7331 19.6052 20.7331 20.033 20.5152C20.4093 20.3234 20.7153 20.0174 20.907 19.6411C21.125 19.2133 21.125 18.6532 21.125 17.5331V10.2982C21.125 9.72385 21.125 9.43667 21.051 9.17221C20.9854 8.93794 20.8776 8.7176 20.733 8.52201C20.5697 8.30121 20.343 8.1249 19.8896 7.77228L13.1073 2.49715C12.756 2.2239 12.5803 2.08727 12.3863 2.03476C12.2152 1.98841 12.0348 1.98841 11.8637 2.03476C11.6697 2.08727 11.494 2.2239 11.1427 2.49715Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
};
