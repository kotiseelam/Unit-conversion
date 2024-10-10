"use client"
const createConverter = (fromUnit, toUnit) => {
    const conversions = {
      'lbToKg': lb => lb * 0.453592,
      'kgToLb': kg => kg * 2.20462,
      'milesToKm': miles => miles * 1.60934,
      'kmToMiles': km => km * 0.621371,
      'cToF': c => (c * 9/5) + 32,
      'fToC': f => (f - 32) * 5/9
    };
   
    const key = `${fromUnit}To${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
    return conversions[key] || (value => value);
  };
   
  export default createConverter;