import React, { useState } from 'react';
import createConverter from '../converter/createconverter';

const TemperatureConverterArray = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleConvertToF = () => {
    const converter = createConverter('c', 'f');
    const values = input.split(',').map(val => parseFloat(val.trim()));
    const results = values.map(value => converter(value)).join(', ');
    setOutput(results);
  };

  const handleConvertToC = () => {
    const converter = createConverter('f', 'c');
    const values = input.split(',').map(val => parseFloat(val.trim()));
    const results = values.map(value => converter(value)).join(', ');
    setOutput(results);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Temperature Converter</h2>
      <input
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mb-4"
        placeholder="Enter temperature "
      />
      <div className="flex space-x-4">
        <button onClick={handleConvertToF} className="bg-blue-500 text-white p-2">Convert to Fahrenheit</button>
        <button onClick={handleConvertToC} className="bg-green-500 text-white p-2">Convert to Celsius</button>
      </div>
      <div className="mt-4">
        <p>Result: {output}</p>
      </div>
    </div>
  );
};

export default TemperatureConverterArray;
