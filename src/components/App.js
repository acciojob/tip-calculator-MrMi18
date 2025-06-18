
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [bill,setBill] = useState(50);
  const [percentage,setPercentage] = useState(18);
  const [people,setPeople] = useState(1);
  const calculat = ()=>{
    let ans = (percentage/100)*bill;
    return (ans/people)
  }
  console.log(people)
  return (
    <div id="container">
       <label htmlFor="bill">Bill:</label>
       <input value={bill} onChange={(e)=>setBill(e.target.value)} type="text"/>
       <label htmlFor="percentage">Tip Percentage:</label>
       <input value={percentage} onChange={(e)=>setPercentage(e.target.value)} type="text"/>
       <label htmlFor="people">Number of People: </label>
       <input value={people} onChange={(e)=>setPeople(e.target.value)} type="text"/>
       <p>Tip Per Person: ${ 
        ((percentage/100)*bill)/people}</p>
    </div>
  )
}

export default App
