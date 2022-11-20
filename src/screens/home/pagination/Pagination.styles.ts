import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../../common';

export const styles = StyleSheet.create({
  bottomBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.neutrals[800],
    height: 80,
    paddingVertical: spacing[2],
  },
  icon: {
    paddingHorizontal: spacing[2],
  },
});
