import { View } from 'react-native';
import Formula from '../formula/rangeFormula';
import Inputs from '../inputs/rangeInputs';
import ToggleButtonGroup from '../common/ToggleButtonGroup';

const RangeFinder = ({ buttons, setButton, selectedButton }) => {
  const mrad = 'MRAD';
  const moa = 'MOA';

  return (
    <>
      <ToggleButtonGroup
        options={buttons}
        selectedOption={selectedButton}
        onSelect={setButton}
      />
      <Formula buttonValue={selectedButton} mrad={mrad} moa={moa} />
      <Inputs buttonValue={selectedButton} mrad={mrad} moa={moa} />
    </>
  );
};

export default RangeFinder;
