import React from 'react';
import {
    Routes,
    Route,
  } from 'react-router-dom';
  import Greeting from './components/Greeting';
  const Router = () => (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  
  );

  export default Router;