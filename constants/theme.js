import { Platform } from 'react-native';

export const COLORS = {
  background: '#000000',
  textPrimary: '#E0E0E0',
  textSecondary: '#A0A0A0',
  accent: 'coral',
  border: '#4B5563',
  inputBackground: '#333333',
  buttonSecondaryBackground: '#4B5563',
  buttonSecondaryText: '#E0E0E0',
  white: '#FFFFFF',
  black: '#000000',
  error: '#EF4444',
  activeGreen: '#10B981',
  inactiveGray: '#6B7280',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 6,
  padding: 16,
  paddingSmall: 8,

  h1: 30,
  h2: 22,
  h3: 16,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  inputHeight: 50,
  inputPaddingHorizontal: 20,

  buttonHeight: 48,
  buttonPaddingVertical: 10,
  buttonPaddingHorizontal: 20,
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, fontWeight: 'bold' },
  h2: { fontSize: SIZES.h2, fontWeight: '600' },
  h3: { fontSize: SIZES.h3, fontWeight: '500' },
  body1: { fontSize: SIZES.body1, fontWeight: 'bold' },
  body2: { fontSize: SIZES.body2, fontWeight: 'normal' },
  body3: { fontSize: SIZES.body3, fontWeight: '500' },
  body4: { fontSize: SIZES.body4, fontWeight: 'normal' },
  body5: { fontSize: SIZES.body5, fontWeight: '500' },
  monospace: {
    fontSize: SIZES.body4,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
