import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import PythonProject from './views/BlindDate';
import MERNProject from './views/MERNProject';
import AuditManager from './views/AuditManager';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/' default/>
        <Route element={<AuditManager/>} path='/audit_manager'/>
        <Route element={<PythonProject/>} path='/blind_date'/>
        <Route element={<MERNProject/>} path='/MERN_project'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
