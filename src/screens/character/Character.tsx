import React from 'react';
import {styles} from './Character.styles';
import GroguPfp from '../../assets/grogu_pfp.jpg';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useCharacter} from './hooks';
import {ParamList} from './Character.types';
import {
  DoubleTapHearthView,
  LikeButton,
  MovieItem,
} from '../../common/components';
import {MovieListItem} from '../../models';
import {Card} from '../../common/components';
import {ChevronLeft} from 'react-native-feather';
import {colors} from '../../common';
import {useUser} from '../../common/hooks/useUser';

export const CharacterScreen = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Character'>>();
  const {getIsLikedCharacter, setLikes} = useUser();
  const navigation = useNavigation();
  const {character, isLoading} = useCharacter(params.id);

  const renderItem = ({item}: {item: MovieListItem}) => <MovieItem {...item} />;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLike = () => {
    if (!character) return;
    setLikes.characters.like(character.id);
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.screen}>
      {!character ? (
        <Text>no character found</Text>
      ) : (
        <DoubleTapHearthView
          style={styles.wrapper}
          onLike={handleLike}
          isLiked={getIsLikedCharacter(character.id)}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <ChevronLeft stroke={colors.white} />
            </TouchableOpacity>
            <Text style={styles.titleSection}>Character detail</Text>
          </View>
          <Card>
            <Image style={styles.img} source={GroguPfp} />
          </Card>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>
              {character.name}
              <LikeButton
                onPress={handleLike}
                isLiked={getIsLikedCharacter(character.id)}
              />
            </Text>
            <Text style={styles.attr}>Birth Year : {character.birthYear}</Text>
            <Text style={styles.attr}>Height : {character.height} cm</Text>
            <Text style={styles.attr}>Weight : {character.mass} kg</Text>
            <Text style={styles.attr}>
              Homeworld : {character.homeworld.name}
            </Text>
          </ScrollView>
          <View style={styles.listView}>
            <Text style={styles.titleSection}>Moovies</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={character.filmConnection.films}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </DoubleTapHearthView>
      )}
    </View>
  );
};
