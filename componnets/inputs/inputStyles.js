import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

export const inputStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  label: {
    ...FONTS.body3,
    color: COLORS.textSecondary,
    marginBottom: SIZES.paddingSmall,
    alignSelf: 'flex-start',
    width: '100%',
  },
  input: {
    height: SIZES.inputHeight,
    backgroundColor: COLORS.inputBackground,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    color: COLORS.textPrimary,
    width: '100%',
    marginBottom: SIZES.padding,
    paddingHorizontal: SIZES.inputPaddingHorizontal,
    ...FONTS.body4,
  },

  resultContainer: {
    alignItems: 'center',
    marginTop: SIZES.padding * 1.5,
    marginBottom: SIZES.padding,
  },
  resultHeader: {
    ...FONTS.h3,
    color: COLORS.textSecondary,
    marginBottom: SIZES.paddingSmall,
  },
  resultText: {
    ...FONTS.body1,
    color: COLORS.textPrimary,
    marginBottom: SIZES.padding * 1.5,
  },
});
