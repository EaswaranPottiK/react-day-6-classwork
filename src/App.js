import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Slider from './Slider';
import Dropdown from './Dropdown';

function App() {
  
  return (
    <div>
      <p style={{fontSize:'x-large', backgroundColor:'#1976D2',padding:'15px 35px', color:'white'}}>Bank of React</p>

      <Slider min="1000" max="10000" heading="Home Value" symbol="$"/>
      <Slider min="0" max="3700" heading="Down Payment" symbol="$"/>
      <Slider min="0" max="3700" heading="Loan Amount" symbol="$"/>
      <Slider min="2" max="18" heading="Interest Rate" symbol="%"/>

      <Dropdown />

    </div>
  );
}

export default App;
