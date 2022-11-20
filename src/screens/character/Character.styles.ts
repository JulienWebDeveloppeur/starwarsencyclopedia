import {StyleSheet} from 'react-native';
import {layoutStyles, radii, spacing, textStyles} from '../../common';

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
    flex: 2,
    paddingLeft: spacing[2],
  },
  title: {
    ...textStyles.title,
  },
  titleSection: textStyles.titleSection,
  birthYear: {
    ...textStyles.subTitle,
    marginBottom: spacing[0],
  },
  attr: {
    ...textStyles.textContent,
    marginBottom: spacing[1],
  },
  icon: {
    marginRight: spacing[1],
  },
});
