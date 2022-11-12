import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Error from './Pages/Shared/ErrorPage/Error';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Header/Navbar';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<Error/>} ></Route>
      </Routes>

      <Footer/>
      <ToastContainer />
    </div>
  );
};

export default App;