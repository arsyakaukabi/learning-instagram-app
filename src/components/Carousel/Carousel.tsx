import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';

interface ICarousel {
  images: string[];
}

const Carousel = ({images}: ICarousel) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = useWindowDimensions().width;

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    carouselRef.current?.scrollToIndex({index});
  };
  const carouselRef = React.useRef<FlatList<any>>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={carouselRef}
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width: width, aspectRatio: 1}} />
        )}
        horizontal
        pagingEnabled
        onScroll={event => {
          const slideSize = event.nativeEvent.layoutMeasurement.width;
          const index = event.nativeEvent.contentOffset.x / slideSize;
          setActiveIndex(Math.round(index));
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              index === activeIndex ? styles.activeDot : null,
            ]}
            onPress={() => handleSlideChange(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  dot: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginHorizontal: 5,
    margin: 10,
  },
  activeDot: {
    backgroundColor: colors.grey,
  },
});

export default Carousel;
