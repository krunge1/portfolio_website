import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import JavaProject from './views/JavaProject';
import PythonProject from './views/PythonProject';
import MERNProject from './views/MERNProject';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/' default/>
        <Route element={<JavaProject/>} path='/audit_app'/>
        <Route element={<PythonProject/>} path='/python_project'/>
        <Route element={<MERNProject/>} path='/MERN_project'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
