import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { inputStyles as styles } from './inputStyles';
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
    <View style={styles.container}>
      <Text style={styles.label}>Target Size (m)</Text>
      <TextInput
        style={styles.input}
        editable
        inputMode='numeric'
        placeholder='Enter target size in meters'
        placeholderTextColor={COLORS.textSecondary}
        value={targetSize}
        onChangeText={(value) => setTargetSize(value)}
      />
      <Text style={styles.label}>{buttonValue} Reading</Text>
      <TextInput
        style={styles.input}
        editable
        inputMode='numeric'
        placeholder={`Enter ${buttonValue} measurement`}
        placeholderTextColor={COLORS.textSecondary}
        value={reticleSize}
        onChangeText={(value) => setReticleSize(value)}
      />
      <TouchableOpacity
        onPress={() => getResult(targetSize, reticleSize)}
        style={[styles.button, styles.primaryButton]}
      >
        <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>
          Calculate Range
        </Text>
      </TouchableOpacity>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeader}>Distance to Target:</Text>
          <Text style={styles.resultText}>{result} M</Text>

          <TouchableOpacity
            onPress={clearValues}
            style={[styles.button, styles.secondaryButton]}
          >
            <Text style={[styles.buttonLabel, styles.secondaryButtonLabel]}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Inputs;
