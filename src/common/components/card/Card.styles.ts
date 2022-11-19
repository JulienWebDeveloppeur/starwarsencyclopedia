import {StyleSheet} from 'react-native';
import {colors, radii, spacing} from '../../constants';

export const styles = StyleSheet.create({
  Card: {
    flex: 1,
    backgroundColor: colors.neutrals[400],
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
    marginVertical: spacing[0],
    marginHorizontal: spacing[1],
    borderRadius: radii.base,
  },
});
