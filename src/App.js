import Modal from 'react-modal';
import Calendar from './Componnets/Calendar';
import Register from './Componnets/Register'
import Login from './Componnets/Login'
import {Route, Routes} from "react-router-dom"




function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  </Routes>
    <Calendar />
    </>
  );
}

export default App;
