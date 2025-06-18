import {StyleSheet} from 'react-native';
import {colors} from '~/shared/theme';

export const styles = StyleSheet.create({
  container: {
    height: 204,
    width: 210,
    backgroundColor: colors.shadow.primary,
    borderRadius: 24,
    paddingBottom: 6,
    overflow: 'hidden',
  },

  imageContainer: {
    height: 162,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 144,
    width: 144,
    resizeMode: 'contain',
  },

  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.bg.secondary,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  name: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
