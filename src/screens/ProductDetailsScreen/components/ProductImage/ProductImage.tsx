import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import theme from '@/config/theme';
import {Heart} from '@/assets/icons';

type ProductImageProps = {
  image: string;
  isPending: boolean;
  isFavorite: boolean;
  onPressFavorite: () => void;
};

export function ProductImage({
  image,
  isPending,
  isFavorite,
  onPressFavorite,
}: ProductImageProps) {
  const size = 30;
  const color = theme.colors.primary;

  return (
    <View style={styles.container}>
      {isPending ? (
        <ActivityIndicator />
      ) : (
        <Image
          src={image}
          width={200}
          height={180}
          resizeMode="contain"
          style={styles.image}
        />
      )}
      <View style={styles.favContainer}>
        <TouchableHighlight
          underlayColor={'#b79bc6'}
          onPress={onPressFavorite}
          style={styles.favButton}>
          <View>
            {isFavorite ? (
              <Heart width={size} height={size} stroke={color} fill={color} />
            ) : (
              <Heart width={size} height={size} stroke={color} />
            )}
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    height: 200,
    justifyContent: 'center',
    width: '100%',
    marginRight: 10,
  },
  image: {
    paddingVertical: 10,
  },
  favContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  favButton: {
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
