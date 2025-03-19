import React, {lazy,Suspense} from 'react'
import { Route,Routes } from 'react-router'
// import ProductsList from '../pages/ProductsList'
// import ProductDetails from '../pages/ProductDetails'
// import ShoppingCart from '../pages/ShoppingCart'
// import Login from '../pages/Login'

export default function Router() {
    const ProductsList = lazy(()=>import('../pages/ProductsList'))
    const ProductDetails = lazy(()=>import('../pages/ProductDetails'))
    const ShoppingCart = lazy(()=>import('../pages/ShoppingCart'))
    const Login = lazy(()=>import('../pages/Login'))
  return (
    <>
    <Suspense fallback={<div>laoding ....</div>}>
        <Routes>
            <Route path='/' element={<ProductsList/>}/>
            <Route path='/shopping-cart' element={<ShoppingCart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product-details/:id' element={<ProductDetails/>}/>
      </Routes>
    </Suspense>
    </>
  )
}
