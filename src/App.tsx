import React from 'react';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import data from './data/data'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Table information={data}/>
 
    </div>
  );
}

export default App;
