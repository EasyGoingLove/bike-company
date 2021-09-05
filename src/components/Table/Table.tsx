import React from "react";

import "./Table.css";

type TableProps = {
    information : object[],
    // price: number,
    // date:string
};


const Table = (props:TableProps) => {
  return (
    <div className="table-container">
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
      </table>
    </div>
  );
};

export default Table;
