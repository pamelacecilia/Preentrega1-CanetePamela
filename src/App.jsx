import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar'
import Titulo from './Components/Titulo/Titulo'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'



function App() {
  return (
    <>
      <NavBar />
      <Titulo />
      <ItemListContainer greetings='Welcome to Samsara'/>
    </>
  )
}

export default App
