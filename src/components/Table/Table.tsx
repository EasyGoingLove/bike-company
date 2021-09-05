import React from "react";

import "./Table.css";

type TableProps = {
    information : any,
    // price: number,
    // date:string
};


const Table = (props:TableProps) => {

    const saveToStorage = ()=>{
        for (let i = 0; i < props.information.length; i++) {
            localStorage.setItem(`item:${i} Price`, props.information[i].price_per_day)
            localStorage.setItem(`item:${i} From`, props.information[i].from)
            localStorage.setItem(`item:${i} To`, props.information[i].to)
            localStorage.setItem(`item:${i} Added`, props.information[i].added)        
        }  
    };

  return (
    <div className="table-container">
      <h1 className="h1-text">Table of all Periods</h1>
      <table className="table">
        <tr>
          <th>Item Id</th>
          <th>Price</th>
          <th>From</th>
          <th>To</th>
          <th>Added</th>
        </tr>
        {props.information.map((e:any,i:number)=>{

            return(
              <tr>
               <td>{i}</td>
               <td>{e.price_per_day}</td>
               <td>{e.from}</td>
               <td>{e.to}</td>
               <td>{e.added}</td>
              </tr>
            )
        })
        }
      </table>
      <div className="btn-container">
        <button onClick={saveToStorage} className="btn">Store all data in LocalStorage</button>
      </div>
    </div>
    
  );
};

export default Table;
