import React from "react";
class Calculator extends React.Component{
    render(){
        return(
            <div className="mainContainer">
            <div className="buttonWrapper">
                <div className="outputScreen">0</div>
                <div className="buttonClick restBtn functBtn">AC</div>
                <div className="buttonClick plus_minusBtn functBtn">+/-</div>
                <div className="buttonClick percentBtn functBtn">%</div>
                <div className="buttonClick divisionBtn extraBtn">+</div>
                <div className="buttonClick">7</div>
                <div className="buttonClick">8</div>
                <div className="buttonClick">9</div>
                <div className="buttonClick muplyBtn extraBtn">X</div>
                <div className="buttonClick">4</div>
                <div className="buttonClick">5</div>
                <div className="buttonClick">6</div>
                <div className="buttonClick additionBtn extraBtn">+</div>
                <div className="buttonClick">1</div>
                <div className="buttonClick">2</div>
                <div className="buttonClick">3</div>
                <div className="buttonClick minusBtn extraBtn">-</div>
                <div className="buttonClick zero">0</div>
                <div className="buttonClick">.</div>
                <div className="buttonClick extraBtn">=</div>

            </div>
            </div>
        )
    }

}



export{Calculator}