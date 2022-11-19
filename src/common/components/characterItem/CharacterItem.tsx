import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './CharacterItem.styles';
import {CharacterItemProps} from './CharacterItem.types';
import {ChevronRight} from 'react-native-feather';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
import {colors} from '../..';

export const CharacterItem: FC<CharacterItemProps> = ({id, name}) => {
  // const navigation = useNavigation<NavigationProp<{Character: {id: string}}>>();

  const handlePressItem = () => {
    // navigation.navigate('Character', {id});
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={handlePressItem}>
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <ChevronRight stroke={colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
