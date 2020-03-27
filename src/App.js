import React from 'react';
import Nav from "./components/Nav";
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';
import Hello from "./components/Hello";



function App() {

  return (
    <div className="App">
      <Nav />
      <Hello />
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
