import {StyleSheet} from 'react-native';

import {colors} from '~/shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: 336,
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border.primary,
  },

  selectedContainer: {
    borderColor: 'transparent',
    backgroundColor: colors.bg.selection,
  },

  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: colors.text.secondary,
  },

  selectedTitle: {
    color: colors.text.white,
  },
});
