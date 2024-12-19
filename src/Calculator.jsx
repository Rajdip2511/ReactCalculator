import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [value, setValue] = useState('');

  const handleClick = (label) => {
    if (label === 'C') {
      setValue('');
    } else if (label === '=') {
      try {
        setValue(eval(value)); // Unsafe for real-world usage
      } catch {
        setValue('Error');
      }
    } else {
      setValue(value + label);
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

  return (
    <div className="calculator p-4 bg-white border rounded">
      <Display value={value} />
      <div className="button-grid mt-3">
        {buttons.map((label, index) => (
          <Button key={index} label={label} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator; // Ensure this is present
