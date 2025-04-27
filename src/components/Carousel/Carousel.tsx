import React from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  SharedValue,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;

const images = [
  {id: '1', url: require('../../assets/banners/bannerHome.png')},
  {id: '2', url: require('../../assets/banners/bannerHome.png')},
];

export default function SimpleCarousel() {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const currentIndex = useDerivedValue(() => {
    return Math.round(scrollX.value / ITEM_WIDTH);
  });

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={images}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{paddingHorizontal: ITEM_SPACING}}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image
              source={{uri: item.url}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      />

      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <AnimatedIndicator
            key={index}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </View>
    </View>
  );
}

function AnimatedIndicator({
  index,
  currentIndex,
}: {
  index: number;
  currentIndex: SharedValue<number>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    const isActive = currentIndex.value === index;
    return {
      opacity: isActive ? 1 : 0.3,
      transform: [{scale: isActive ? 1.2 : 1}],
    };
  });

  return (
    <Animated.View style={[styles.indicator, animatedStyle]}>
      <Svg height="10" width="10">
        <Circle cx="5" cy="5" r="5" fill="#333" />
      </Svg>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 0.6,
    marginHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  indicator: {
    marginHorizontal: 6,
  },
});
