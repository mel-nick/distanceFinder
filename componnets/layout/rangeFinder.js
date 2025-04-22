import { View, TouchableOpacity, Text } from 'react-native';
import Formula from '../formula/rangeFormula';
import Inputs from '../inputs/rangeInputs';
import { rangeFinderStyles as styles } from './rangeFinderStyles';

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

export default RangeFinder;
