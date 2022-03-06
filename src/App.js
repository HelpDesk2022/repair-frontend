import React from 'react';
import Rotas from './Rotas';
import {
BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Rotas/>
    </Router>
  );
}

export default App;
