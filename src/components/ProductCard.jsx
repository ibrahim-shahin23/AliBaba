import React from 'react'
import { Link } from 'react-router';
import { useDispatch } from "react-redux";
import { addToCart } from '../store/slices/cart';

export default function ProductCard(props) {
    const {product}=props

//   const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
    
      <div className="card h-100">
        <img src={product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <Link to={`/product-details/${product.id}`}><button className='btn btn-primary'>View</button></Link>
            <button className='btn btn-outline-primary mx-2' onClick={()=>dispatch(addToCart(product))}>Buy</button>
        </div>


      </div>
    </>
  )
}
