import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings='Welcome to Samsara'/>} />
        <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
        <Route path='/category/:cid' element={<ItemListContainer greetings='Welcome to Samsara' /> } /> 
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
