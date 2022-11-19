import React from 'react';
import {styles} from './Movie.styles';
import Grogu from '../../assets/grogu.jpg';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useMovie} from './hooks';
import {ParamList} from './Movie.types';
import {CharacterItem} from '../../common/components';
import {CharacterList} from '../../models';
import {Card} from '../../common/components';
import {ChevronLeft} from 'react-native-feather';
import {colors} from '../../common';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEarth,
  faPeopleGroup,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

export const MovieScreen = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Movie'>>();
  const navigation = useNavigation();
  const {movie, isLoading} = useMovie(params.id);

  const renderItem = ({item}: {item: CharacterList}) => (
    <CharacterItem {...item} />
  );

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
            <TouchableOpacity onPress={handleGoBack}>
              <ChevronLeft stroke={colors.white} />
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
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faPeopleGroup}
                  color={colors.white}
                />
                {movie.speciesConnection.totalCount}
              </Text>
              <Text style={styles.count}>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faEarth}
                  color={colors.white}
                />
                {movie.planetConnection.totalCount}
              </Text>

              <Text style={styles.count}>
                <FontAwesomeIcon
                  style={styles.icon}
                  icon={faRocket}
                  color={colors.white}
                />
                {movie.vehicleConnection.totalCount}
              </Text>
            </View>
            <Text style={styles.desc}>{movie.openingCrawl}</Text>
          </ScrollView>
          <View style={styles.listView}>
            <Text style={styles.titleSection}>The cast</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={movie.characterConnection.characters}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      )}
    </View>
  );
};
