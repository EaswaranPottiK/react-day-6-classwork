import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Slider from './Slider';
import Dropdown from './Dropdown';
import PieChart from './PieChart';

function App() {

  const [totalCostOfHouse,setTotalCostOfHouse] = useState(3000)
  const [downPayment,setDownPayment] = useState(600)
  const [loanAmout, setLoanAmount] = useState(2400)
  const [interest,setInterest] = useState(2)
  const [year,setYear] = useState(5)
  const [amountPerMonth,setAmountPerMonth] = useState(0)

  function setMonthlyPayment(){

    let i = parseFloat(interest)/12.0
    let n = year

    var monthlyPayment = loanAmout * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    setAmountPerMonth(Math.floor(monthlyPayment/12))

  }

  function setTotalCostOfHouseHandler(value){
    setTotalCostOfHouse(value)
    setLoanAmount(totalCostOfHouse-downPayment)
    setMonthlyPayment();
  }
  function setDownPaymentHandler(value){
    setDownPayment(value)
    setLoanAmount(totalCostOfHouse - downPayment)
    setMonthlyPayment();
  }
  function setLoanAmountHandler(value){
    setLoanAmount(value)
    setDownPayment(totalCostOfHouse - loanAmout)
    setMonthlyPayment();
  }
  function setInterestHandler(value){
    setInterest(value)
    setMonthlyPayment();
  }
  function setYearHandler(value){
    setYear(value)
    setMonthlyPayment();
  }


  return (
    <>
    <p style={{fontSize:'x-large', backgroundColor:'#1976D2',padding:'15px 35px', color:'white'}}>Bank of React</p>
    <div style={{display:'flex',justifyContent:'space-around'}}>
      
      <div style={{width:'100%'}}>

      <Slider min="1000" max="10000" value={totalCostOfHouse} heading="Home Value" symbol="$" getValue={setTotalCostOfHouseHandler}/>
      <Slider min="0" max={totalCostOfHouse} value={downPayment} heading="Down Payment" symbol="$" getValue={setDownPaymentHandler} />
      <Slider min="0" max={totalCostOfHouse} value={loanAmout} heading="Loan Amount" symbol="$" getValue={setLoanAmountHandler}/>
      <Slider min="2" max="18" value={interest} heading="Interest Rate" symbol="%" getValue={setInterestHandler}/>
      <Dropdown getValue={setYearHandler} />
      </div>

      <div style={{width:'500px'}}>
      <PieChart apm={amountPerMonth} loanAmout={loanAmout}/>
      </div>

    </div>
    </>
  );
}

export default App;
