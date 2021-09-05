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
        setScreen(<Table information={data}/>);
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




