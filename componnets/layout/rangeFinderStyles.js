import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme'; // Adjust path if necessary

export const rangeFinderStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.padding * 1.5,
    width: '100%',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: SIZES.paddingSmall,
    paddingHorizontal: SIZES.paddingSmall,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.inputBackground,
    marginHorizontal: SIZES.base / 2,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  selectedToggleButton: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
  toggleButtonLabel: {
    ...FONTS.body5,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  selectedToggleButtonLabel: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
