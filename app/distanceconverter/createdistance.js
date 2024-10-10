import React, { useState } from 'react';
import createConverter from '../converter/createconverter';

const DistanceConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // For single value or array conversion
  const handleConvertToKm = () => {
    const converter = createConverter('miles', 'km');
    const values = input.split(',').map(val => parseFloat(val.trim()));
    const convertedValues = values.map(val => isNaN(val) ? '' : converter(val)); 
    setOutput(convertedValues.filter(val => val !== '').join(', ')); 
  };

  const handleConvertToMiles = () => {
    const converter = createConverter('km', 'miles');
    const values = input.split(',').map(val => parseFloat(val.trim()));
    const convertedValues = values.map(val => isNaN(val) ? '' : converter(val)); 
    setOutput(convertedValues.filter(val => val !== '').join(', ')); 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Distance Converter</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mb-4"
        placeholder="Enter distance"
      />
      <div className="flex space-x-4">
        <button onClick={handleConvertToKm} className="bg-blue-500 text-white p-2">Convert to Kilometers</button>
        <button onClick={handleConvertToMiles} className="bg-green-400 text-white p-2">Convert to Miles</button>
      </div>
      <div className="mt-4">
        <p>Result: {output}</p>
      </div>
    </div>
  );
};

export default DistanceConverter;
