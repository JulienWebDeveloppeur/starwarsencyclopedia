import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './CharacterItem.styles';
import {CharacterItemProps} from './CharacterItem.types';
import {ChevronRight} from 'react-native-feather';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {colors} from '../..';
import Animated from 'react-native-reanimated';
import {useAnimatedListItem} from '../animated';

export const CharacterItem: FC<CharacterItemProps> = ({
  id,
  name,
  isAnimated = true,
  viewableItems,
}) => {
  const navigation = useNavigation<NavigationProp<{Character: {id: string}}>>();

  const animatedStyle = useAnimatedListItem(viewableItems, id);

  const handlePressItem = () => {
    navigation.navigate('Character', {id});
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={handlePressItem}>
      <Animated.View style={[styles.item, isAnimated ? animatedStyle : null]}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <ChevronRight stroke={colors.white} />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};
