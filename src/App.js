import React, { useState } from 'react';

import './App.css';

function GreatSomeOne({ greating, subject }) {
  return(
    <div>
      {greating} {subject}!
    </div>
  )
}

function App() {

  const [greating, setGreating] = useState('HELLO')

  function handleInputChange(event){
    const input = event.target
    const newGreating = input.value.toUpperCase()
    setGreating(newGreating)
  }

  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="greating">Greeting: </label>
          <input id="greating" onChange={handleInputChange} value={greating} />
        </div>
        <div>
          <GreatSomeOne greating={greating} subject="Nancy"/>
        </div>
      </form>
    </div>
  );
}

export default App;
