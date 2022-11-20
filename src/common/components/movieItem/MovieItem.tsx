import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './MovieItem.styles';
import {MovieItemProps} from './MovieItem.types';
import {ChevronRight} from 'react-native-feather';
import {colors} from '../..';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const MovieItem: FC<MovieItemProps> = ({
  id,
  title,
  releaseDate,
  openingCrawl,
}) => {
  const navigation = useNavigation<NavigationProp<{Movie: {id: string}}>>();

  const handlePressItem = () => {
    navigation.navigate('Movie', {id});
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={handlePressItem}>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <ChevronRight stroke={colors.white} />
        </View>
        {releaseDate ? (
          <Text style={styles.releaseDate}>{releaseDate}</Text>
        ) : null}
        {openingCrawl ? (
          <Text style={styles.desc}>{openingCrawl.slice(0, 50)}...</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
