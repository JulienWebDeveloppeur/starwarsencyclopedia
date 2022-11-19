import React, {FC} from 'react';
import {View} from 'react-native';
import {CardProps} from './Card.types';
import {styles} from './Card.styles';

export const Card: FC<CardProps> = ({children}) => (
  <View style={styles.Card}>{children}</View>
);
