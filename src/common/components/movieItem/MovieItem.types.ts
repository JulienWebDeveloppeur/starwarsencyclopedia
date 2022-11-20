import {ViewToken} from 'react-native';
import Animated from 'react-native-reanimated';

export type MovieItemProps = {
  id: string;
  title: string;
  releaseDate?: string;
  openingCrawl?: string;
  isAnimated?: boolean;
  viewableItems?: Animated.SharedValue<ViewToken[]>;
};
