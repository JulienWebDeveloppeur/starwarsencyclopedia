import {StyleSheet} from 'react-native';
import {colors, spacing, typo} from '../constants';

export const textStyles = StyleSheet.create({
  titleScreen: {
    color: colors.white,
    fontSize: typo.fontSizes.xl,
    fontWeight: 'bold',
  },
  title: {
    color: colors.white,
    fontSize: typo.fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing[0],
  },
  titleSection: {
    color: colors.white,
    fontSize: typo.fontSizes.md,
    fontWeight: 'bold',
    marginVertical: spacing[0],
  },
  subTitle: {
    color: colors.whiteAlpha[500],
    fontSize: typo.fontSizes.sm,
    fontWeight: '500',
    marginBottom: spacing[0],
  },
  textContent: {
    color: colors.whiteAlpha[800],
    fontSize: typo.fontSizes.sm,
    fontWeight: '400',
  },
});
