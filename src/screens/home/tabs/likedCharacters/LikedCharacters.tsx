import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AnimatedFlatList, CharacterItem} from '../../../../common/components';
import {useUser} from '../../../../common/hooks/useUser';
import {useCharacters} from './hooks';
import {styles} from './LikedCharacters.styles';

export const LikedCharacters = () => {
  const {
    user: {
      likes: {characters},
    },
  } = useUser();
  const {charactersList, isLoading} = useCharacters();
  const likedCharacters = charactersList?.filter(c =>
    characters.includes(c.id),
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Liked Characters</Text>
        </View>
        <View style={styles.listView}>
          {likedCharacters && likedCharacters.length ? (
            <AnimatedFlatList data={likedCharacters} Item={CharacterItem} />
          ) : (
            <Text style={styles.textContent}>No liked characters.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
