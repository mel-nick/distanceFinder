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
    return <Text style={styles.text}>Range (m) = Size(m) * 1000 / MRAD</Text>;
  if (buttonValue === moa)
    return <Text style={styles.text}>Range (m) = Size(m) * 3438 / MOA</Text>;
  return null;
};
export default Formula;
