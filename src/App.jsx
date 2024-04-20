import { useState } from 'react'

import './App.css'
import Sidebar from './components/SideBar'
import MainArea from './components/MainArea'

function App() {

  return (
  <div className='App'>
    <Sidebar/>
    <MainArea/>
  </div>
  )
}

export default App
