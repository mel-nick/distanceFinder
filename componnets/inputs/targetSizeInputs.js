import { StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { useState } from 'react';
import React from 'react';

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 22,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#fff',
    width: '70%',
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 13,
  },
  result: {
    color: '#fff',
    fontSize: 40,
    marginTop: 20,
    color: '#fff',
  },
  button: {
    marginVertical: 20,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'center',
    width: '70%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  stickToBottom: {
    marginTop: 50,
  },
});

const Inputs = ({ buttonValue, mrad, moa }) => {
  const [targetSize, setTargetSize] = useState('');
  const [reticleSize, setReticleSize] = useState('');
  const [result, setResult] = useState(0);

  const getResult = (targetSize, reticleSize) => {
    buttonValue === mrad &&
      setResult(
        ((parseFloat(targetSize) * parseFloat(reticleSize)) / 1000).toFixed(2)
      );
    buttonValue === moa &&
      setResult(
        ((parseFloat(targetSize) * parseFloat(reticleSize)) / 3438).toFixed(2)
      );
  };
  console.log('result', result);
  const clearValues = () => {
    setResult(0);
    setTargetSize('');
    setReticleSize('');
  };

  return (
    <>
      <TextInput
        style={styles.input}
        editable
        inputMode='numeric'
        placeholder='Distance to the target'
        placeholderTextColor='#fff'
        value={targetSize}
        onChangeText={(value) => setTargetSize(value)}
      />
      <TextInput
        style={styles.input}
        editable
        inputMode='numeric'
        placeholder={buttonValue}
        placeholderTextColor='#fff'
        value={reticleSize}
        onChangeText={(value) => setReticleSize(value)}
      />
      <TouchableOpacity
        onPress={() => getResult(targetSize, reticleSize)}
        style={[styles.button, styles.selected]}
      >
        <Text style={[styles.buttonLabel, styles.selectedLabel]}>
          Calculate
        </Text>
      </TouchableOpacity>
      {result ? (
        <>
          <Text style={styles.header}>Target size :</Text>
          <Text style={styles.result}>{result} M</Text>

          <TouchableOpacity
            onPress={() => clearValues()}
            style={[styles.button, styles.selected]}
          >
            <Text style={[styles.buttonLabel, styles.selectedLabel]}>
              Clear
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
    </>
  );
};

export default Inputs;
