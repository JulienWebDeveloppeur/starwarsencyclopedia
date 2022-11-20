import {StyleSheet} from 'react-native';
import {spacing, colors, typo} from '../..';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingVertical: spacing[1],
    paddingRight: spacing[2],
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
    fontSize: typo.fontSizes.sm,
    fontWeight: '500',
  },
});
