import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

export const formulaStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
    marginBottom: SIZES.padding * 1.5,
    width: '100%',
  },
  formulaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    ...FONTS.monospace,
    color: COLORS.textPrimary,
    marginRight: SIZES.base / 2,
  },
  fractionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numeratorText: {
    ...FONTS.monospace,
    color: COLORS.textPrimary,
    paddingHorizontal: SIZES.paddingSmall,
  },
  fractionLine: {
    height: 1,
    backgroundColor: COLORS.textPrimary,
    width: '100%',
    marginVertical: SIZES.base / 4,
  },
  denominatorText: {
    ...FONTS.monospace,
    color: COLORS.textPrimary,
    paddingHorizontal: SIZES.paddingSmall,
  },
});
