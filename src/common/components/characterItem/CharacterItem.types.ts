import {ViewToken} from 'react-native';
import Animated from 'react-native-reanimated';

export type CharacterItemProps = {
  id: string;
  name: string;
  isAnimated?: boolean;
  viewableItems?: Animated.SharedValue<ViewToken[]>;
};
