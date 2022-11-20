import React, {useRef, useState} from 'react';
import {styles} from './Home.styles';
import Swiper from 'react-native-swiper';
import {LikedCharacters} from './tabs/likedCharacters';
import {Movies} from './tabs/movies';
import {Pagination} from './pagination';

export const HomeScreen = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);

  const handleScrollTo = (index: number) => {
    if (!swiperRef || (swiperRef && !swiperRef.current)) return;
    swiperRef.current?.scrollTo(index);
  };

  return (
    <Swiper
      ref={swiperRef}
      renderPagination={() => (
        <Pagination currentIndex={swiperIndex} onScrollTo={handleScrollTo} />
      )}
      loop={false}
      style={styles.wrapper}
      index={swiperIndex}
      onIndexChanged={setSwiperIndex}>
      <Movies />
      <LikedCharacters />
    </Swiper>
  );
};
