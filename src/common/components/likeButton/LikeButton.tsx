import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {LikeButtonProps} from './LikeButton.types';
import {styles} from './LikeButton.styles';
import {Heart} from 'react-native-feather';
import {colors} from '../../constants';

export const LikeButton: FC<LikeButtonProps> = ({isLiked, onPress}) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.likeButton}>
      {isLiked ? (
        <Heart color={colors.error[900]} />
      ) : (
        <Heart color={colors.white} />
      )}
    </TouchableOpacity>
  </View>
);
