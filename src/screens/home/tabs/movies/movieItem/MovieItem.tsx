import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './MovieItem.styles';
import {MovieItemProps} from './MovieItem.types';
import {ChevronRight} from 'react-native-feather';
import {colors} from '../../../../../common';

export const MovieItem: FC<MovieItemProps> = ({
  title,
  releaseDate,
  openingCrawl,
}) => (
  <TouchableOpacity activeOpacity={0.6}>
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <ChevronRight stroke={colors.white} />
      </View>
      <Text style={styles.releaseDate}>{releaseDate}</Text>
      <Text style={styles.desc}>{openingCrawl.slice(0, 50)}...</Text>
    </View>
  </TouchableOpacity>
);
