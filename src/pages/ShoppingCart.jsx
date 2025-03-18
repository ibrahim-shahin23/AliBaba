import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decreaseQuantity, removeFromCart } from '../store/slices/cart'
export default function ShoppingCart() {

  const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <div className='container my-5'> 
        {
          cart.products?(cart.products.map((product)=>(
            <>
          <div key={product.id} className='d-flex justify-content-between align-items-center'>
            <img src={product.thumbnail} alt="" />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <button className='btn btn-success' onClick={()=>dispatch(addToCart(product))}>+</button>
            <h6>{product.quantity}</h6>
            <button className='btn btn-warning' onClick={() => dispatch(decreaseQuantity(product))}>-</button>
            <button className='btn btn-danger' onClick={()=>
              dispatch(removeFromCart(product))}
              >Remove from cart</button>
          </div>
           <hr />
        </>
          )
          )):(<h1>****************Your Cart is Empty****************</h1>)
        }
      </div>
    </>
  )
}
