import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import ProductsList from './pages/ProductsList'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<ProductsList/>}/>
        <Route path='/shopping-cart' element={<ShoppingCart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
