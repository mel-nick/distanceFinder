import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { inputStyles as styles } from './inputStyles';
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
    <View style={styles.container}>
      <Text style={styles.label}>Distance (m)</Text>
      <TextInput
        style={styles.input}
        editable
        inputMode='numeric'
        placeholder='Enter distance to target'
        placeholderTextColor={COLORS.textSecondary}
        value={distance}
        onChangeText={(value) => setDistance(value)}
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
        onPress={() => getResult(distance, reticleSize)}
        style={[styles.button, styles.primaryButton]}
      >
        <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>
          Calculate Target Size
        </Text>
      </TouchableOpacity>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeader}>Target Size:</Text>
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
