import React from "react";

import "./Table.css";

type TableProps = {
    information : any,
    addedinformation : any,
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

            let a:any = localStorage.getItem("presetItems");
            if(a===null){
                localStorage.setItem(`presetItems`,JSON.stringify(dataToAdd))
            }else{
                let b =JSON.parse(a); 
                console.log(b);
                
                let newItems = b.concat(dataToAdd); 
                localStorage.setItem(`presetItems`,JSON.stringify(newItems))
            }
        }  
      
       
    };

  return (
    <div className="table-container">
      <h1 className="h1-text">Table of all Periods</h1>
      <table className="table">
        <tr>
          <th>Price</th>
          <th>From</th>
          <th>To</th>
          <th>Added</th>
        </tr>
        {props.information.map((e:any,i:number)=>{

            return(
              <tr>
               <td>{e.price_per_day}</td>
               <td>{e.from}</td>
               <td>{e.to}</td>
               <td>{e.added}</td>
              </tr>
            )
        })
        }
        {props.addedinformation.map((e:any,i:number)=>{
            return(
            <tr>
            <td>{e[0]}</td>
            <td>{e[1]}</td>
            <td>{e[2]}</td>
            <td>{e[3]}</td>
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
