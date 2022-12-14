import {StyleSheet} from 'react-native';
import {spacing, layoutStyles, textStyles} from '../../../../common';

export const styles = StyleSheet.create({
  wrapper: layoutStyles.wrapper,
  container: {
    flex: 1,
    paddingBottom: 90,
  },
  header: {
    ...layoutStyles.sectionHeader,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
  },
  screenTitle: textStyles.titleScreen,
});
