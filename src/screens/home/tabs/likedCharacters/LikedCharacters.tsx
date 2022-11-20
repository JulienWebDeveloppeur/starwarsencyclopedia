import * as React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {CharacterItem} from '../../../../common/components';
import {useUser} from '../../../../common/hooks/useUser';
import {CharacterList} from '../../../../models';
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

  const renderItem = ({item}: {item: CharacterList}) => (
    <CharacterItem {...item} />
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
            <FlatList
              showsVerticalScrollIndicator={false}
              data={likedCharacters}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={styles.textContent}>No liked characters.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
