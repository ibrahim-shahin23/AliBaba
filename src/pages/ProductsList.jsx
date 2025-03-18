import React ,{useState,useEffect} from 'react'
import axios from 'axios'

import ProductCard from '../components/ProductCard'
export default function ProductsList() {
    
    const [products,setProducts]=useState([])
    
    function loadProducts(){
        axios.get('https://dummyjson.com/products')
        .then ((response)=>{
            setProducts(response.data.products)
        })
    }
    useEffect(()=>{
        loadProducts()
    },[])

  return (
    <>
{  products?  (<div className='container d-flex gap-3 justify-content-center align-items-center flex-wrap h-100'>
    {products.map((product)=>{
        return(
            <div key={product.id} className='col-md-3 h-100'>
                <ProductCard product={product}/>
            </div>
            )
        })
    }  
    </div>):<p>Loading...</p>
}    
</>
  )
}
