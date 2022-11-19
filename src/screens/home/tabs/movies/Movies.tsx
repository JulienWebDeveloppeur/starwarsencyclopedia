import * as React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useMovies} from './hooks';
import {styles} from './Movies.styles';
import {Movie} from '../../../../models';
import {MovieItem} from './movieItem';

export const Movies = () => {
  const {data, isLoading} = useMovies();

  const renderItem = ({item}: {item: Movie}) => <MovieItem {...item} />;

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Movies</Text>
        {!data ? (
          <Text>no data</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.allFilms.films}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
