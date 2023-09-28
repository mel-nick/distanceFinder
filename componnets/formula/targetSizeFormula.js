import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 20,
  },
});

const Formula = ({ buttonValue, mrad, moa }) => {
  if (buttonValue === mrad)
    return (
      <Text style={styles.text}>Size (m) = Distance(m) * MRAD / 1000</Text>
    );
  if (buttonValue === moa)
    return (
      <Text style={styles.text}>Ssize (m) = Distance(m) * MOA / 3438</Text>
    );
  return null;
};
export default Formula;
