import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './LikedCharacters.styles';

export const LikedCharacters = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Liked Characters</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
