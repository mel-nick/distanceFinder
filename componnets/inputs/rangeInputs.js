import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { inputStyles } from './inputStyles';
import ActionButton from '../common/ActionButton';
import ClearButton from '../common/ClearButton';
import { COLORS } from '../../constants/theme';

const Inputs = ({ buttonValue, mrad, moa }) => {
  const [targetSize, setTargetSize] = useState('');
  const [reticleSize, setReticleSize] = useState('');
  const [result, setResult] = useState(null);

  const getResult = (targetSize, reticleSize) => {
    const target = parseFloat(targetSize);
    const reticle = parseFloat(reticleSize);

    if (isNaN(target) || isNaN(reticle) || reticle === 0) {
      setResult(null);
      return;
    }

    let calculatedResult;
    if (buttonValue === mrad) {
      calculatedResult = Math.round((target * 1000) / reticle);
    } else if (buttonValue === moa) {
      calculatedResult = Math.round((target * 3438) / reticle);
    }
    setResult(calculatedResult);
  };

  const clearValues = () => {
    setResult(null);
    setTargetSize('');
    setReticleSize('');
  };

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.label}>Target Size (m)</Text>
      <TextInput
        style={inputStyles.input}
        editable
        inputMode='numeric'
        placeholder='Enter target size in meters'
        placeholderTextColor={COLORS.textSecondary}
        value={targetSize}
        onChangeText={(value) => setTargetSize(value)}
      />
      <Text style={inputStyles.label}>{buttonValue} Reading</Text>
      <TextInput
        style={inputStyles.input}
        editable
        inputMode='numeric'
        placeholder={`Enter ${buttonValue} measurement`}
        placeholderTextColor={COLORS.textSecondary}
        value={reticleSize}
        onChangeText={(value) => setReticleSize(value)}
      />
      <ActionButton
        onPress={() => getResult(targetSize, reticleSize)}
        label='Calculate Range'
      />

      {result !== null && (
        <View style={inputStyles.resultContainer}>
          <Text style={inputStyles.resultHeader}>Distance to Target:</Text>
          <Text style={inputStyles.resultText}>{result} M</Text>

          <ClearButton onPress={clearValues} />
        </View>
      )}
    </View>
  );
};

export default Inputs;
