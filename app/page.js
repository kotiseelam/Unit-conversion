"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeightConverter from './weightConverter/createweightconverter';
import DistanceConverter from './distanceconverter/createdistance';
import TemperatureConverter from './temperatureconverter/createtemperature';
// Importing here
 
const App = () => {


  const messageStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  return (
  <>
  <Router>

  <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
<ul className="flex space-x-4">
<li><Link to="/" className="text-white">Home</Link></li>
<li><Link to="/weight" className="text-white">Weight</Link></li>
<li><Link to="/distance" className="text-white">Distance</Link></li>
<li><Link to="/temperature" className="text-white">Temperature</Link></li>
</ul>
</nav>
<Routes>
<Route path="/weight" element={<WeightConverter />} />
<Route path="/distance" element={<DistanceConverter />} />
<Route path="/temperature" element={<TemperatureConverter />} />
</Routes>
<div className="welcome-message" style={messageStyle}>
      <h1>Welcome to the All-in-One Calculator!</h1>
      <p>Your one-stop solution for all your calculation needs.</p>
      
  </div>
  </Router>
  </>
  );
};

 
export default App;