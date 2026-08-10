import React from 'react'
import "./app.scss"
import Doc from './Components/Doc'
// import { useState } from 'react';
// import Notes from './Components/Notes.jsx'

import NavBar from './Components/NavBar'
// import Terminal from './Components/windows/Terminal';
// import Github from './Components/Github.jsx';
const App = () => {

  // const [text, setText] = useState('');

  return (

    <>
    <main>
      <NavBar/>
      <Doc/>
    </main>
    </>
  )
}

export default App
