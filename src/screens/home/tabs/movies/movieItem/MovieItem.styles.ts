import {StyleSheet} from 'react-native';
import {colors, spacing, typo} from '../../../../../common';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingVertical: spacing[1],
    paddingRight: spacing[2],
    marginVertical: spacing[0],
    marginLeft: spacing[2],
    borderBottomColor: colors.whiteAlpha[100],
    borderBottomWidth: 0.5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: typo.fontSizes.md,
    fontWeight: '600',
  },
  releaseDate: {
    color: colors.whiteAlpha[500],
    fontSize: typo.fontSizes.sm,
    fontWeight: '500',
    marginBottom: spacing[0],
  },
  desc: {
    color: colors.whiteAlpha[600],
    fontSize: typo.fontSizes.sm,
    fontWeight: '500',
    textAlign: 'justify',
  },
});
