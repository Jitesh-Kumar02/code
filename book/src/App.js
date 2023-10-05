import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Components/Main/Main';
import Success from './Components/Success/Success';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/order/summary" element={<Success />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/:referId" element={<Main />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
