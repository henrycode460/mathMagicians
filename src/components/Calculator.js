import React, {useState}from "react";

import calculate from '../logic/calculate';

const  Calculator = () => {
const solution = document.getElementById('outputScreen');
const [result, setResult] = useState({ total: solution, next: 0, operation: '' });

        const clickFunction = (e) => {
            setResult(calculate(result, e.target.innerHTML));
          
        }

        return(
            <div className="mainContainer">
            <div className="buttonWrapper">
               <div className="outputScreen" id="outputScreen">
               {result.total}
                {result.operation}
                {result.next}
               </div>
              
                <button type="button" onClick={clickFunction} className="buttonClick restBtn functBtn" value="AC">AC</button>
                <button type="button" onClick={clickFunction} className="buttonClick plus_minusBtn functBtn" value="+/-">+/-</button>
                <button type="button" onClick={clickFunction} value="%" className="buttonClick button percentBtn functBtn">%</button>
                <button type="button" onClick={clickFunction} value="+" className="buttonClick button divisionBtn extraBtn">+</button>
                <button type="button" onClick={clickFunction} value="7" className="buttonClick button">7</button>
                <button type="button" onClick={clickFunction} value="8" className="buttonClick button">8</button>
                <button type="button" onClick={clickFunction} value="9" className="buttonClick button">9</button>
                <button type="button" onClick={clickFunction} value="x" className="buttonClick button muplyBtn extraBtn">x</button>
                <button type="button" onClick={clickFunction} value="4" className="buttonClick button">4</button>
                <button type="button" onClick={clickFunction} value="5" className="buttonClick button">5</button>
                <button type="button" onClick={clickFunction} value="6" className="buttonClick button">6</button>
                <button type="button" onClick={clickFunction} value="/" className="buttonClick button additionBtn extraBtn">/</button>
                <button type="button" onClick={clickFunction} value="1" className="buttonClick button">1</button>
                <button type="button" onClick={clickFunction} value="2" className="buttonClick button">2</button>
                <button type="button" onClick={clickFunction} value="3" className="buttonClick button">3</button>
                <button type="button" onClick={clickFunction} value="-" className="buttonClick button minusBtn extraBtn">-</button>
                <button type="button"  onClick={clickFunction} value="0" className="buttonClick button zero">0</button>
                <button type="button" onClick={clickFunction} value="." className="buttonClick button">.</button>
                <button type="button" onClick={clickFunction} className="buttonClick extraBtn" value="=">=</button>

            </div>
            </div>
        )
    

}



export{Calculator}