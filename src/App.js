import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Country/Countries';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <div className="App">
    
    <Header></Header>
    <Countries></Countries>
    <Footer></Footer>

    </div>
    
  );
}





export default App;