import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import  axios  from 'axios';

export default function ProductDetails() {
    const [product,setProduct] = useState(null)
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then ((response)=>{setProduct(response.data)})
    })
  return (
    <>{

    
    product?(
        <div className='container d-flex justify-content-between my-5'>
            <img src={product.thumbnail} alt="" />
            <div>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <h3>{product.price}</h3>
            </div>
        </div>
    ):<p>Loading</p>
    }  
    </>
  )
}
