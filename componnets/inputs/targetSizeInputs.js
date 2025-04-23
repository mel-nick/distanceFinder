import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { inputStyles } from './inputStyles';
import ActionButton from '../common/ActionButton';
import ClearButton from '../common/ClearButton';
import { COLORS } from '../../constants/theme';

const Inputs = ({ buttonValue, mrad, moa }) => {
  const [distance, setDistance] = useState('');
  const [reticleSize, setReticleSize] = useState('');
  const [result, setResult] = useState(null);

  const getResult = (distance, reticleSize) => {
    const dist = parseFloat(distance);
    const reticle = parseFloat(reticleSize);

    if (isNaN(dist) || isNaN(reticle)) {
      setResult(null);
      return;
    }

    let calculatedResult;
    if (buttonValue === mrad) {
      calculatedResult = ((dist * reticle) / 1000).toFixed(2);
    } else if (buttonValue === moa) {
      calculatedResult = ((dist * reticle) / 3438).toFixed(2);
    }
    setResult(calculatedResult);
  };

  const clearValues = () => {
    setResult(null);
    setDistance('');
    setReticleSize('');
  };

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.label}>Distance (m)</Text>
      <TextInput
        style={inputStyles.input}
        editable
        inputMode='numeric'
        placeholder='Enter distance to target'
        placeholderTextColor={COLORS.textSecondary}
        value={distance}
        onChangeText={(value) => setDistance(value)}
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
        onPress={() => getResult(distance, reticleSize)}
        label='Calculate Target Size'
      />

      {result !== null && (
        <View style={inputStyles.resultContainer}>
          <Text style={inputStyles.resultHeader}>Target Size:</Text>
          <Text style={inputStyles.resultText}>{result} M</Text>

          <ClearButton onPress={clearValues} />
        </View>
      )}
    </View>
  );
};

export default Inputs;
