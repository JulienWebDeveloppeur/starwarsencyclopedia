import React from 'react';
import {styles} from './Movie.styles';
import Grogu from '../../assets/grogu.jpg';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useMovie} from './hooks';
import {ParamList} from './Movie.types';
import {AnimatedFlatList, CharacterItem} from '../../common/components';
import {Card} from '../../common/components';
import {ChevronLeft} from 'react-native-feather';
import {colors} from '../../common';

export const MovieScreen = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Movie'>>();
  const navigation = useNavigation();
  const {movie, isLoading} = useMovie(params.id);

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.screen}>
      {!movie ? (
        <Text>no movie found</Text>
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
              <ChevronLeft stroke={colors.white} width={32} height={32} />
            </TouchableOpacity>
            <Text style={styles.titleSection}>Movie detail</Text>
          </View>
          <Card>
            <Image style={styles.img} source={Grogu} />
          </Card>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.releaseDate}>{movie.releaseDate}</Text>
            <View style={styles.counts}>
              <Text style={styles.count}>
                Species : {movie.speciesConnection.totalCount}
              </Text>
              <Text style={styles.count}>
                Planets : {movie.planetConnection.totalCount}
              </Text>

              <Text style={styles.count}>
                Vehicles : {movie.vehicleConnection.totalCount}
              </Text>
            </View>
            <Text style={styles.desc}>{movie.openingCrawl}</Text>
          </ScrollView>
          <View style={styles.listView}>
            <Text style={styles.titleSection}>The cast</Text>
            <AnimatedFlatList
              data={movie.characterConnection.characters}
              Item={CharacterItem}
            />
          </View>
        </View>
      )}
    </View>
  );
};
