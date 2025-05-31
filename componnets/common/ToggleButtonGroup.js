import React from 'react';
import { View } from 'react-native';
import ToggleButton from './ToggleButton';
import { buttonStyles } from '../../constants/buttonStyles';

/**
 * A group of toggle buttons where one can be selected
 * @param {Array} options - Array of option strings to display as buttons
 * @param {string} selectedOption - The currently selected option
 * @param {Function} onSelect - Function to call when an option is selected
 * @param {Object} containerStyle - Optional additional styles for the container
 * @param {Object} buttonStyle - Optional additional styles for the buttons
 * @param {Object} labelStyle - Optional additional styles for the button labels
 */
const ToggleButtonGroup = ({
  options,
  selectedOption,
  onSelect,
  containerStyle = {},
  buttonStyle = {},
  labelStyle = {},
}) => {
  return (
    <View style={[buttonStyles.buttonContainer, containerStyle]}>
      {options.map((option) => (
        <ToggleButton
          key={option}
          label={option}
          onPress={() => onSelect(option)}
          isSelected={selectedOption === option}
          customStyle={buttonStyle}
          customLabelStyle={labelStyle}
        />
      ))}
    </View>
  );
};

export default ToggleButtonGroup;
