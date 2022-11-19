import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ArrowDown, ArrowUp} from 'react-native-feather';
import {useMovies} from './hooks';
import {styles} from './Movies.styles';
import {MovieListItem} from '../../../../models';
import {MovieItem} from './movieItem';
import {colors} from '../../../../common';
import {useOrderArray} from '../../../../common/hooks/useOrderArray';

export const Movies = () => {
  const [order, setOrder] = useState<'desc' | 'asc'>('desc');
  const {data, isLoading} = useMovies();
  const {orderedArray} = useOrderArray({
    arr: data?.allFilms?.films,
    propertyKey: 'releaseDate',
    order,
  });

  const renderItem = ({item}: {item: MovieListItem}) => <MovieItem {...item} />;

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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={orderedArray}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
