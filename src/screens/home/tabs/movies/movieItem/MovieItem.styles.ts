import {StyleSheet} from 'react-native';
import {colors, layoutStyles, spacing, textStyles} from '../../../../../common';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingVertical: spacing[1],
    paddingRight: spacing[2],
    marginLeft: spacing[2],
    borderBottomColor: colors.whiteAlpha[100],
    borderBottomWidth: 0.5,
  },
  header: layoutStyles.sectionHeader,
  title: textStyles.title,
  releaseDate: textStyles.subTitle,
  desc: textStyles.textContent,
});
