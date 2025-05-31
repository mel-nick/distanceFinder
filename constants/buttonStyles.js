import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from './theme';

export const buttonStyles = StyleSheet.create({
  // Base button styles
  button: {
    height: SIZES.buttonHeight,
    paddingVertical: SIZES.buttonPaddingVertical,
    paddingHorizontal: SIZES.buttonPaddingHorizontal,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: SIZES.padding,
  },

  // Button variations
  primaryButton: {
    backgroundColor: COLORS.accent,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: COLORS.accent,
    borderWidth: 1,
  },

  // Button label styles
  buttonLabel: {
    ...FONTS.body3,
  },
  primaryButtonLabel: {
    color: COLORS.white,
  },
  secondaryButtonLabel: {
    color: COLORS.accent,
  },

  // Toggle button group container
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.padding * 1.5,
    width: '100%',
  },

  // Mode selection container (slight variation of buttonContainer)
  modeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.padding * 2, // Slightly more margin than regular button container
    width: '100%',
  },

  // Toggle button styles
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

  // Toggle button label styles
  toggleButtonLabel: {
    ...FONTS.body5,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  // Mode toggle specific styles (if needed)
  modeToggleButton: {
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
  modeToggleButtonLabel: {
    ...FONTS.body5,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});
