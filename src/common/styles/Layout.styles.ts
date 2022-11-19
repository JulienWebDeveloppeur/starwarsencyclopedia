import {StyleSheet} from 'react-native';
import {colors, spacing} from '../constants';

export const layoutStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.neutrals[900],
  },
  container: {
    flex: 1,
    paddingVertical: spacing[1],
    paddingRight: spacing[2],
  },
  screenHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[4],
    paddingHorizontal: spacing[2],
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
