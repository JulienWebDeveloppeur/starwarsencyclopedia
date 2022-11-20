import {Dimensions, StyleSheet} from 'react-native';

const {width: SIZE, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  hearth: {
    position: 'absolute',
    top: height / 3,
    zIndex: 10,
    width: SIZE,
    height: SIZE,
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.35,
    shadowRadius: 35,
  },
});
