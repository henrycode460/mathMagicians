import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const solution = document.getElementById('outputScreen');
  const [result, setResult] = useState({ total: solution, next: 0, operation: '' });

  const clickFunction = (e) => {
    setResult(calculate(result, e.target.innerHTML));
  };
  return (
    <div className="parentCalculte">
      <h1 className="calDescript">Lets Do some Math!!</h1>
      <div className="mainContainer">
        <div className="buttonWrapper">
          <div className="outputScreen" id="outputScreen">
            {result.total}
            {result.operation}
            {result.next}
          </div>
          <button type="button" onClick={clickFunction} className="buttonClick restBtn functBtn" value="AC">AC</button>
          <button type="button" onClick={clickFunction} className="buttonClick plus_minusBtn functBtn" value="+/-">+/-</button>
          <button type="button" onClick={clickFunction} value="%" className="buttonClick  percentBtn functBtn">%</button>
          <button type="button" onClick={clickFunction} value="+" className="buttonClick  divisionBtn extraBtn">+</button>
          <button type="button" onClick={clickFunction} value="7" className="buttonClick ">7</button>
          <button type="button" onClick={clickFunction} value="8" className="buttonClick ">8</button>
          <button type="button" onClick={clickFunction} value="9" className="buttonClick ">9</button>
          <button type="button" onClick={clickFunction} value="x" className="buttonClick  muplyBtn extraBtn">x</button>
          <button type="button" onClick={clickFunction} value="4" className="buttonClick ">4</button>
          <button type="button" onClick={clickFunction} value="5" className="buttonClick ">5</button>
          <button type="button" onClick={clickFunction} value="6" className="buttonClick ">6</button>
          <button type="button" onClick={clickFunction} value="/" className="buttonClick  additionBtn extraBtn">÷</button>
          <button type="button" onClick={clickFunction} value="1" className="buttonClick ">1</button>
          <button type="button" onClick={clickFunction} value="2" className="buttonClick ">2</button>
          <button type="button" onClick={clickFunction} value="3" className="buttonClick ">3</button>
          <button type="button" onClick={clickFunction} value="-" className="buttonClick minusBtn extraBtn">-</button>
          <button type="button" onClick={clickFunction} value="0" className="buttonClick zero">0</button>
          <button type="button" onClick={clickFunction} value="." className="buttonClick ">.</button>
          <button type="button" onClick={clickFunction} className="buttonClick extraBtn" value="=">=</button>

        </div>
      </div>
    </div>
  );
}

export default Calculator ;
