import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Formula from '../formula/targetSizeFormula';
import Inputs from '../inputs/targetSizeInputs';
import { rangeFinderStyles as styles } from './rangeFinderStyles';

const TargetSize = ({ buttons, setButton, selectedButton }) => {
  const mrad = 'MRAD';
  const moa = 'MOA';
  return (
    <>
      <View style={styles.buttonContainer}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            onPress={() => setButton(button)}
            style={[
              styles.toggleButton,
              selectedButton === button && styles.selectedToggleButton,
            ]}
          >
            <Text
              style={[
                styles.toggleButtonLabel,
                selectedButton === button && styles.selectedToggleButtonLabel,
              ]}
            >
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Formula buttonValue={selectedButton} mrad={mrad} moa={moa} />
      <Inputs buttonValue={selectedButton} mrad={mrad} moa={moa} />
    </>
  );
};

export default TargetSize;
