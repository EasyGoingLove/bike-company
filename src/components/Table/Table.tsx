import React from "react";

import "./Table.css";

type TableProps = {
    information : any,
    // price: number,
    // date:string
};


const Table = (props:TableProps) => {

    const saveToStorage = ()=>{
        let dataToAdd:string[] = [];
        for (let i = 0; i < props.information.length; i++) {
              dataToAdd = [
                 props.information[i].price_per_day,
                 props.information[i].from,
                 props.information[i].to,
                 props.information[i].added
            ]  
        }  
        let a = localStorage.getItem("presetItems");
        if(a!=null){
         let newItems = a + dataToAdd; // make an array of arrays
         localStorage.setItem(`presetItems`,JSON.stringify(newItems))
        }else{
            localStorage.setItem(`presetItems`,JSON.stringify(dataToAdd)) 
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
