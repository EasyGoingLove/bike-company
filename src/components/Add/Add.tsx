import React, { useState } from "react";

import './Add.css';

const Add = () => {

    const [price, setPrice] = useState<any>(),
    [from,setFrom] =useState<any>(),
    [to,setTo] =useState<any>(),
    [added,setAdded] =useState<any>()
    ;
  
  const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log(from);
      
      if(from.toString()>to.toString()||from.toString()<added.toString()){
       alert("Invalid inputs dates must be correct.")
      }else{
        let dataToAdd = [price,from,to,added] ;
        let a:any = localStorage.getItem("addedItem");
            if(a===null){
                localStorage.setItem(`addedItem`,JSON.stringify(dataToAdd))
            }else{
                let b =JSON.parse(a); 
                console.log(b);
                
                let newItems = b.concat(dataToAdd); 
                localStorage.setItem(`addedItem`,JSON.stringify(newItems))
            }
        alert("Period Saved Successfully.")
      }
      
  }

    return(
        <div className="adder-conteiner">
            <h1>Add a period</h1>
             <form onSubmit={handleSubmit}>
                <label>Price</label><br/>
                <input type="number" value={price}
                   onChange={e => setPrice(e.target.value)} name="price" placeholder="Price"/>
                <br/>
                <label >From</label><br/>
                <input type="date" value={from}
                   onChange={e => setFrom(e.target.value)}  name="from" placeholder="From.."/>
                <br/>
                <label >To</label><br/>
                <input type="date"value={to}
                   onChange={e => setTo(e.target.value)}  name="to" placeholder="To.."/>
                <br/>
                <label >Added</label><br/>
                <input type="date" value={added}
                   onChange={e => setAdded(e.target.value)} name="added" placeholder="Added.."/>
                <br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )

};
export default Add;