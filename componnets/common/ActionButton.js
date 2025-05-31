import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../../constants/buttonStyles';

/**
 * Reusable Action button component for main actions like Calculate
 * @param {Function} onPress - Function to execute when button is pressed
 * @param {string} label - The label for the button
 * @param {Object} customStyle - Optional additional styles for the button
 * @param {Object} customLabelStyle - Optional additional styles for the button label
 */
const ActionButton = ({
  onPress,
  label,
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

export default ActionButton;
