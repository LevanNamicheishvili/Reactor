import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralPage from '../src/pages/GeneralPage/index';
import AdminPage from './pages/AdminPage';'../src/pages/AdminPage/index'
import '../src/assets/scss/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneralPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;