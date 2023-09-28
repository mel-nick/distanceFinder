import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Formula from '../formula/rangeFormula';
import Inputs from '../inputs/rangeInputs';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 10,
    minWidth: '34.5%',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

const RangeFinder = ({ buttons, setButton, selectedButton }) => {
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
              styles.button,
              selectedButton === button && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedButton === button && styles.selectedLabel,
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

export default RangeFinder;
