import React from 'react';
import logo from './logo.svg';
import './App.css';
import Szakmaitapasztalat from './szakmaitapasztalat';
import Idpontfoglalas from './idopontfoglalas';
import { Route, Routes } from 'react-router-dom';
import Főoldal from './fooldal';
import Nav from './nav';
import Footer from './footer';

function App() {
  return (
  <><Nav/><Routes>
        <Route path="/" element={<Főoldal />}></Route>
        <Route path="/tapasztalat" element={<Szakmaitapasztalat />}></Route>
        <Route path="/idopont" element={<Idpontfoglalas />}></Route>
      </Routes><Footer/></>
  );
}
export default App;
