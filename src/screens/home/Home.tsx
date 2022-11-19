import React, {useState} from 'react';
import {styles} from './Home.styles';
import Swiper from 'react-native-swiper';
import {colors} from '../../common';
import {LikedCharacters} from './tabs/likedCharacters';
import {Movies} from './tabs/movies';

export const HomeScreen = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <Swiper
      loop={false}
      style={styles.wrapper}
      dotColor={colors.whiteAlpha[100]}
      activeDotColor={colors.primary[500]}
      index={swiperIndex}
      onIndexChanged={setSwiperIndex}>
      <Movies />
      <LikedCharacters />
    </Swiper>
  );
};
