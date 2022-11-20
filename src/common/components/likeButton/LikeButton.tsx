import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {LikeButtonProps} from './LikeButton.types';
import {styles} from './LikeButton.styles';
import HearthRed from '../../../assets/heart_red.png';
import {colors} from '../../constants';
import {Heart} from 'react-native-feather';

export const LikeButton: FC<LikeButtonProps> = ({isLiked, onPress}) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.likeButton}>
      {isLiked ? (
        <Image source={HearthRed} style={styles.image} resizeMode={'cover'} />
      ) : (
        <Heart color={colors.white} />
      )}
    </TouchableOpacity>
  </View>
);
