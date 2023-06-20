import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/' default/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
