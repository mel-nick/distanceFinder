import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useState } from 'react';
import RangeFinder from './componnets/layout/rangeFinder';
import { StatusBar } from 'expo-status-bar';
import TargetSize from './componnets/layout/targetSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 20,
    minWidth: '34.5%',
  },
  selected: {
    backgroundColor: 'palegreen',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'dimgray',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'dimgray',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

const MradDistanceFinder = () => {
  const [buttonValue, setButtonValue] = useState('MRAD');
  const [startupButtonValue, setSturtupButtonValue] = useState('Range');

  const buttons = ['MRAD', 'MOA'];
  const startupButtons = ['Range', 'Traget size'];

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {startupButtons.map((button) => (
          <TouchableOpacity
            key={button}
            onPress={() => setSturtupButtonValue(button)}
            style={[
              styles.button,
              startupButtonValue === button && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                startupButtonValue === button && styles.selectedLabel,
              ]}
            >
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {startupButtonValue === startupButtons[0] ? (
        <RangeFinder
          buttons={buttons}
          setButton={setButtonValue}
          selectedButton={buttonValue}
        />
      ) : (
        <TargetSize
          buttons={buttons}
          setButton={setButtonValue}
          selectedButton={buttonValue}
        />
      )}

      <StatusBar style='auto' />
    </View>
  );
};
export default MradDistanceFinder;
