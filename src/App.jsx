import React from 'react';
import './App.css';
import Form from './Components/Form';
import Multicheck from './Components/Multicheck';
import Dropdown from './Components/Dropdown';
import Radio from './Components/Radio';

const App = () => {
  return (
    <main>
     <h1>Welcome to React</h1>
     <Form/>
    <Multicheck/>
   <Dropdown/>
   <Radio/>
    </main>
  );
}

export default App;

