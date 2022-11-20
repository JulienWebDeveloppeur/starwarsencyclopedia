import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {ArrowDown, ArrowUp} from 'react-native-feather';
import {useMovies} from './hooks';
import {styles} from './Movies.styles';
import {MovieItem} from '../../../../common/components/movieItem';
import {colors} from '../../../../common';
import {useOrderArray} from '../../../../common/hooks/useOrderArray';
import {AnimatedFlatList} from '../../../../common/components';

export const Movies = () => {
  const [order, setOrder] = useState<'desc' | 'asc'>('desc');
  const {data, isLoading} = useMovies();
  const {orderedArray} = useOrderArray({
    arr: data?.allFilms?.films,
    propertyKey: 'releaseDate',
    order,
  });

  const handleToggleOrder = () => {
    if (order === 'desc') {
      setOrder('asc');
      return;
    }
    setOrder('desc');
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Movies</Text>
          <TouchableOpacity onPress={handleToggleOrder}>
            {order === 'asc' ? (
              <ArrowDown stroke={colors.white} />
            ) : (
              <ArrowUp stroke={colors.white} />
            )}
          </TouchableOpacity>
        </View>
        {!data ? (
          <Text>no data</Text>
        ) : (
          <AnimatedFlatList data={orderedArray} Item={MovieItem} />
        )}
      </View>
    </SafeAreaView>
  );
};
