import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {DoubleTapHearthViewProps} from './DoubleTapHearthView.types';
import Hearth from '../../../../assets/heart.png';
import HearthRed from '../../../../assets/heart_red.png';
import {styles} from './DoubleTapHearthView.styles';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

export const DoubleTapHearthView: FC<DoubleTapHearthViewProps> = ({
  isLiked,
  style,
  children,
  onLike,
}) => {
  const scale = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));

  const onDoubleTap = () => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
    onLike();
  };

  return (
    <TapGestureHandler numberOfTaps={2} onActivated={onDoubleTap}>
      <AnimatedView style={style}>
        <AnimatedImage
          source={isLiked ? HearthRed : Hearth}
          style={[styles.hearth, animatedStyle]}
          resizeMode={'center'}
        />
        {children}
      </AnimatedView>
    </TapGestureHandler>
  );
};
