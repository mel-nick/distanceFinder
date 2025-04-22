import { Text, View } from 'react-native';
import { formulaStyles as styles } from './formulaStyles';

const Formula = ({ buttonValue, mrad, moa }) => {
  let numerator = '';
  let denominator = '';

  if (buttonValue === mrad) {
    numerator = 'Distance(m) * MRAD';
    denominator = '1000';
  } else if (buttonValue === moa) {
    numerator = 'Distance(m) * MOA';
    denominator = '3438';
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Select MRAD or MOA</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.formulaRow}>
        <Text style={styles.baseText}>Size(m) = </Text>
        <View style={styles.fractionContainer}>
          <Text style={styles.numeratorText}>{numerator}</Text>
          <View style={styles.fractionLine} />
          <Text style={styles.denominatorText}>{denominator}</Text>
        </View>
      </View>
    </View>
  );
};

export default Formula;
