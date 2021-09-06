import React, { useState } from "react";

import "./Calculator.css";

const Calculator = () => {
  let calculatedPrices: any[] = [];

  const [results, setResults] = useState<any>();
  const calculator = () => {
    const savedData1: any = localStorage.getItem("presetItems");
    const savedData2: any = localStorage.getItem("addedItem");
    
    
    try{
      const parsedData: string[] = JSON.parse(savedData1).concat(JSON.parse(savedData2));
      for (let i = 0; i < parsedData.length; i += 4) {
        let date1 = new Date(parsedData[i + 1]);
        let date2 = new Date(parsedData[i + 2]);

        let Difference_In_Time = date2.getTime() - date1.getTime();

        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        console.log(parseInt(parsedData[i]),Difference_In_Days);
        
        let price = Math.floor((Difference_In_Days+1) * parseInt(parsedData[i]));
        calculatedPrices.push(parsedData[i + 1], parsedData[i + 2], price);
      }
      
      setResults(
        <table className="table">
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Total Price</th>
          </tr>
          {calculatedPrices.map((e: any, i: number) => {         
            if (i % 3 === 0 && (e)) {
              return (
                <tr>
                  <td>{calculatedPrices[i]}</td>
                  <td>{calculatedPrices[i + 1]}</td>
                  <td>{calculatedPrices[i + 2]}</td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </table>
      );
    }catch(err){
     alert("Please first save periods in the 'Show all periods' page.")
    } 
  };
  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator-container">
        <button onClick={calculator} className="calc-btn">
          Calculate all the prices for the periods
        </button>

        {results}
      </div>
    </div>
  );
};

export default Calculator;
