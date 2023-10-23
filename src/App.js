import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Options from './components/Options';
import "../src/components/styles.css"
import { Articlez } from './components/Article';
import Footer from './components/Footer';
import MainMobile from './components/MainMobile';

const App = () => {
  return (
    <div>
    <Header/>
    <Main/>
    <MainMobile/>
    <Options/>
    <Articlez/>
    <Footer/>
    </div>
  );
}

export default App;

