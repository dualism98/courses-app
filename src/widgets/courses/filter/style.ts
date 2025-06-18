import {StyleSheet} from 'react-native';

import {colors} from '~/shared/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.alpha.black[20],
    borderRadius: 40,
    padding: 5,
    paddingLeft: 10,
    gap: 3,
  },

  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    color: colors.text.white,
  },

  arrowImage: {
    height: 18,
    width: 18,
  },
});
