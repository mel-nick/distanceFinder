import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS, SIZES, FONTS } from './constants/theme';

export const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: SIZES.padding * 2,
  },
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding,
  },
  modeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.padding * 2,
    width: '100%',
  },
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
  selectedModeToggleButton: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
  modeToggleButtonLabel: {
    ...FONTS.body5,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  selectedModeToggleButtonLabel: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  // Button styles have been moved to constants/buttonStyles.js
});
