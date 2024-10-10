"use client";
import { useState } from 'react';
import createConverter from '../converter/createconverter';

const WeightConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [unit, setUnit] = useState(''); // To track the unit of the output

  const handleConvertToKg = () => {
    const converter = createConverter('lb', 'kg');
    const values = input.split(',').map(val => parseFloat(val.trim()));
    const convertedValues = values.map(val => (isNaN(val) ? '' : converter(val))).filter(val => val !== ''); // Handle NaN values
    setOutput(convertedValues.join(', ')); 
    setUnit('kg'); 
  };

  const handleConvertToLb = () => {
    const converter = createConverter('kg', 'lb');
    const values = input.split(',').map(val => parseFloat(val.trim()));
    const convertedValues = values.map(val => (isNaN(val) ? '' : converter(val))).filter(val => val !== ''); // Handle NaN values
    setOutput(convertedValues.join(', ')); 
    setUnit('lb'); 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Weight Converter</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mb-4"
        placeholder="Enter weight"
      />
      <div className="flex space-x-4">
        <button onClick={handleConvertToKg} className="bg-blue-500 text-white p-2">Convert to Kilograms</button>
        <button onClick={handleConvertToLb} className="bg-green-400 text-white p-2">Convert to Pounds</button>
      </div>
      <div className="mt-4">
        <p>Result: {output} {unit && `(${unit})`}</p> {}
      </div>
    </div>
  );
};

export default WeightConverter;
