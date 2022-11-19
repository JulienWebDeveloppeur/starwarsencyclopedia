import {StyleSheet} from 'react-native';
import {colors, radii, spacing} from '../../constants';

export const styles = StyleSheet.create({
  Card: {
    flex: 1,
    backgroundColor: colors.neutrals[400],
    marginVertical: spacing[0],
    marginHorizontal: spacing[1],
    borderRadius: radii.base,
  },
});
