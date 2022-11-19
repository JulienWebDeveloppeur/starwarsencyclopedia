import {StyleSheet} from 'react-native';
import {colors, spacing, typo} from '../../../../common';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
  },
  screenTitle: {
    color: colors.white,
    fontSize: typo.fontSizes.xl,
    fontWeight: 'bold',
  },
});
