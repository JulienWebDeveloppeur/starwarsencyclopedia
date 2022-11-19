import {StyleSheet} from 'react-native';
import {colors, spacing, typo} from '../../../../common';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: spacing[2],
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
  },
  screenTitle: {
    color: colors.white,
    fontSize: typo.fontSizes.xl,
    fontWeight: 'bold',
  },
});
