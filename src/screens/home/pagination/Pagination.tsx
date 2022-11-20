import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {PaginationProps} from './Pagination.types';
import {styles} from './Pagination.styles';
import {Film, Heart} from 'react-native-feather';
import {colors} from '../../../common';

export const Pagination: FC<PaginationProps> = ({currentIndex, onScrollTo}) => {
  const handlePress = (index: number) => {
    onScrollTo(index);
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={() => handlePress(0)}>
        <Film
          style={styles.icon}
          color={currentIndex === 0 ? colors.primary[500] : colors.white}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(1)}>
        <Heart
          style={styles.icon}
          color={currentIndex === 1 ? colors.primary[500] : colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};
