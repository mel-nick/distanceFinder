import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../../constants/buttonStyles';

/**
 * Reusable Clear button component
 * @param {Function} onPress - Function to execute when button is pressed
 * @param {string} label - Optional custom label for the button (defaults to "Clear")
 * @param {Object} customStyle - Optional additional styles for the button
 * @param {Object} customLabelStyle - Optional additional styles for the button label
 */
const ClearButton = ({
  onPress,
  label = 'Clear',
  customStyle = {},
  customLabelStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyles.button, buttonStyles.secondaryButton, customStyle]}
    >
      <Text
        style={[
          buttonStyles.buttonLabel,
          buttonStyles.secondaryButtonLabel,
          customLabelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ClearButton;
