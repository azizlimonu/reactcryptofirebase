import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, SignIn, SignUp, Account, CoinPage } from './pages';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/singup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
        <Route path='/coinpage' element={<CoinPage />} />
      </Routes>
    </>
  );
}

export default App;
