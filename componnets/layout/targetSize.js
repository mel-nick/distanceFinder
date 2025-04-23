import React from 'react';
import Formula from '../formula/targetSizeFormula';
import Inputs from '../inputs/targetSizeInputs';
import ToggleButtonGroup from '../common/ToggleButtonGroup';

const TargetSize = ({ buttons, setButton, selectedButton }) => {
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

export default TargetSize;
