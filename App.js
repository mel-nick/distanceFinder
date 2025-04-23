import {
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
import { appStyles } from './App.styles';
import ToggleButtonGroup from './componnets/common/ToggleButtonGroup';
import { COLORS } from './constants/theme';
import { buttonStyles } from './constants/buttonStyles';

const MradDistanceFinder = () => {
  const [unitType, setUnitType] = useState('MRAD');
  const [calculationMode, setCalculationMode] = useState('Range');

  const unitTypes = ['MRAD', 'MOA'];
  const calculationModes = ['Range', 'Target Size'];

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <StatusBar style='light' backgroundColor={COLORS.background} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={appStyles.scrollViewContent}
          keyboardShouldPersistTaps='handled'
        >
          <View style={appStyles.container}>
            <ToggleButtonGroup
              options={calculationModes}
              selectedOption={calculationMode}
              onSelect={setCalculationMode}
              containerStyle={buttonStyles.modeSelectionContainer}
            />

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
