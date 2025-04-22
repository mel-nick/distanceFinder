import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import RangeFinder from './componnets/layout/rangeFinder';
import { StatusBar } from 'expo-status-bar';
import TargetSize from './componnets/layout/targetSize';
import { appStyles as styles } from './App.styles';
import { COLORS } from './constants/theme';

const MradDistanceFinder = () => {
  const [unitType, setUnitType] = useState('MRAD');
  const [calculationMode, setCalculationMode] = useState('Range');

  const unitTypes = ['MRAD', 'MOA'];
  const calculationModes = ['Range', 'Target Size'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style='light' backgroundColor={COLORS.background} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.container}>
            <View style={styles.modeSelectionContainer}>
              {calculationModes.map((mode) => (
                <TouchableOpacity
                  key={mode}
                  onPress={() => setCalculationMode(mode)}
                  style={[
                    styles.modeToggleButton,
                    calculationMode === mode && styles.selectedModeToggleButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.modeToggleButtonLabel,
                      calculationMode === mode &&
                        styles.selectedModeToggleButtonLabel,
                    ]}
                  >
                    {mode}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {calculationMode === calculationModes[0] ? (
              <RangeFinder
                buttons={unitTypes}
                setButton={setUnitType}
                selectedButton={unitType}
              />
            ) : (
              <TargetSize
                buttons={unitTypes}
                setButton={setUnitType}
                selectedButton={unitType}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default MradDistanceFinder;
