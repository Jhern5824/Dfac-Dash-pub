import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './page/home.jsx'
import Header from './component/header.jsx';
import Branch from './page/branch.jsx';
import Base from './page/base.jsx';
import Dfac from './page/dfac.jsx';
//#01579b

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:branch" element={<Branch />} />
        <Route path="/:branch/:baseid" element={<Base />} />
        <Route path="/:branch/:baseid/:dfacid" element={<Dfac />} />
      </Routes>
    </>
  );
}

export default App;
