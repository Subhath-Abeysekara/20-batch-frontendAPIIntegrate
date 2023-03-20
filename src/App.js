import logo from './logo.svg';
import './App.css';
import baseUrl from './apis/baseUrl';
import { useState } from 'react';
import Public from './superAdminOperations/publicOperationsAdmin-superAdmin/Public';
import Super from './superAdminOperations/superAdmin/Super';
import Operator from './OperatorOperations/Operator';

function App() {
  return (
    <div className="App">
      <Public></Public>
      <Super></Super>
      <Operator></Operator>
    </div>
  );
}

export default App;
