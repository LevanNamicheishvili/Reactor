import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Home/index';
import GeneralPage from '../src/pages/GeneralPage/index';
import RegistrationPage from '../src/pages/Registration/index';
import '../src/assets/scss/style.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/" element={<GeneralPage />} />
      </Routes>
    </Router>
  );
}

export default App;