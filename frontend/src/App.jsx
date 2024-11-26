// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RegistrationForm />} />
    </Routes>
  </Router>
);

export default App;
