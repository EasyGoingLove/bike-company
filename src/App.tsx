import React, { useState } from 'react';

import Header from './components/Header/Header';
import Add from './components/Add/Add';
import Table from './components/Table/Table';
import Calculator from './components/Calculator/Calculator';
import data from './data/data'
import './App.css';

function App() {

  const [screen,setScreen] = useState<JSX.Element>();

  const navigation = (e:any)=>{
      let currentID:string = e.target.id;
      if(currentID==='id:0'){
        setScreen(<Add/>); 
      }
      else if(currentID==='id:1'){
        setScreen(<Calculator/>);
      }else{
        let added:any = localStorage.getItem("addedItem");
        let parsed:any = JSON.parse(added);
        let newArr:any[] = [];
        let partArr:any[] = [];
        let counter:number= 0;
          
        for (let i in parsed) {
           
            if((counter/3)===1) {
              partArr[counter] = parsed[i];
              counter=0;
              newArr.push(partArr);
              partArr=[];
              
            }else{
              partArr[counter] = parsed[i];
              counter++;
            } 
        }
        setScreen(<Table addedinformation={newArr} information={data}/>);
      }
   
  };
  return (
    <div className="App">
      <Header element={navigation}/>
      {screen}
    </div>
  );
}

export default App;




