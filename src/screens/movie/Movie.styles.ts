import {StyleSheet} from 'react-native';
import {
  colors,
  layoutStyles,
  radii,
  spacing,
  typo,
  textStyles,
} from '../../common';

export const styles = StyleSheet.create({
  screen: layoutStyles.screen,
  img: {
    height: '100%',
    width: '100%',
    borderRadius: radii.base,
  },
  wrapper: layoutStyles.wrapper,
  header: layoutStyles.screenHeader,
  scrollView: {
    flex: 1,
    paddingVertical: spacing[1],
    paddingHorizontal: spacing[2],
  },
  listView: {
    flex: 1,
    paddingLeft: spacing[2],
  },
  title: {
    ...textStyles.title,
    textAlign: 'center',
  },
  titleSection: textStyles.titleSection,
  releaseDate: {
    ...textStyles.subTitle,
    marginBottom: spacing[0],
    textAlign: 'center',
  },
  desc: {
    ...textStyles.textContent,
    textAlign: 'center',
    marginBottom: spacing[2],
  },
  counts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing[0],
  },
  count: {
    color: colors.whiteAlpha[800],
    fontSize: typo.fontSizes.sm,
    fontWeight: '400',
    marginHorizontal: spacing[0],
  },
  icon: {
    marginRight: spacing[1],
  },
});
