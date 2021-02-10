import './App.css';
import React from 'react'
import Bird from './bird'
import Bot from './fallengestaltdirty.png'

function App() {
  return (
    <div className='wholeThing'>
  <img src={Bot} alt='completeMe' id='img' />
  <Bird />
  </div>
  );
}

export default App;
