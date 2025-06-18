import {StyleSheet} from 'react-native';
import {colors} from '~/shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.secondary,
    paddingTop: 24,
    gap: 6,
  },

  closeButton: {
    position: 'absolute',
    zIndex: 1,
    top: 24,
  },

  closeImage: {
    height: 22,
    width: 22,
  },

  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
  },

  contentContainer: {
    alignItems: 'center',
    paddingTop: 12,
    gap: 6,
  },
});
