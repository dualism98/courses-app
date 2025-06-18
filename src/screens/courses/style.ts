import {StyleSheet} from 'react-native';

import {colors} from '~/shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.primary,
  },

  filterContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    alignSelf: 'center',
  },
});
