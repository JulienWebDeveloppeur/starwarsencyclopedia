import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './Moovies.styles';

export const Moovies = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Moovies</Text>
      </View>
    </SafeAreaView>
  );
};
