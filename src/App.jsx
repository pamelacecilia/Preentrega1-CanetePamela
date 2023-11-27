import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './contexts/CartContext'
import { CartContainer } from './Components/CartContainer/CartContainer'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <CartContextProvider>
       <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greetings='Welcome to Samsara'/>} />
            <Route path='/category/:cid' element={<ItemListContainer greetings='Welcome to Samsara' /> } /> 
            <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
       </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
