import {ViewToken} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useAnimatedListItem = (
  viewableItems?: Animated.SharedValue<ViewToken[]>,
  id: string,
) =>
  useAnimatedStyle(() => {
    const isVisible = viewableItems
      ? !!viewableItems.value
          .filter(item => item.isViewable)
          .find(viewableItem => viewableItem.item.id === id)
      : false;
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);
