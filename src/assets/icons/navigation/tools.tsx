import { View } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

export default ({ color }: { color: string }) => {
  return (
    <View>
      <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
        <G id="tool-01">
          <Path
            id="Icon"
            d="M16.2564 7.63137C15.8603 7.23535 15.6623 7.03735 15.5881 6.80902C15.5229 6.60817 15.5229 6.39183 15.5881 6.19098C15.6623 5.96265 15.8603 5.76465 16.2564 5.36863L19.0947 2.53026C18.3415 2.18962 17.5054 2 16.625 2C13.3113 2 10.625 4.68629 10.625 8C10.625 8.49104 10.684 8.9683 10.7952 9.42509C10.9144 9.91424 10.974 10.1588 10.9634 10.3133C10.9523 10.4751 10.9282 10.5612 10.8536 10.7051C10.7824 10.8426 10.6458 10.9791 10.3728 11.2522L4.12498 17.5C3.29656 18.3284 3.29656 19.6716 4.12498 20.5C4.95341 21.3284 6.29656 21.3284 7.12498 20.5L13.3728 14.2522C13.6458 13.9791 13.7824 13.8426 13.9199 13.7714C14.0638 13.6968 14.1499 13.6727 14.3117 13.6616C14.4662 13.651 14.7107 13.7106 15.1999 13.8297C15.6567 13.941 16.1339 14 16.625 14C19.9387 14 22.625 11.3137 22.625 8C22.625 7.11959 22.4354 6.28347 22.0947 5.53026L19.2564 8.36863C18.8603 8.76465 18.6623 8.96265 18.434 9.03684C18.2332 9.1021 18.0168 9.1021 17.816 9.03684C17.5876 8.96265 17.3896 8.76465 16.9936 8.36863L16.2564 7.63137Z"
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