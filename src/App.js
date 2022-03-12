import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
