import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../../constants/buttonStyles';

/**
 * Reusable Toggle button component for mode selection
 * @param {string} label - The button label
 * @param {Function} onPress - Function to execute when button is pressed
 * @param {boolean} isSelected - Whether this toggle button is currently selected
 * @param {Object} customStyle - Optional additional styles for the button
 * @param {Object} customLabelStyle - Optional additional styles for the button label
 */
const ToggleButton = ({
  label,
  onPress,
  isSelected,
  customStyle = {},
  customLabelStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonStyles.toggleButton,
        isSelected && buttonStyles.secondaryButton,
        customStyle,
      ]}
    >
      <Text
        style={[
          buttonStyles.toggleButtonLabel,
          isSelected && buttonStyles.secondaryButtonLabel,
          customLabelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ToggleButton;
