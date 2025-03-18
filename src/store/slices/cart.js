import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[]
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload
      const existingProduct = state.products.find((p)=>p.id===newProduct.id)
      if (existingProduct)
        {
          existingProduct.quantity+=1
      }else
      state.products.push({...newProduct,"quantity":1})
    },
    decreaseQuantity:(state,action)=>{
      const newProduct = action.payload
      const existingProduct = state.products.find((p)=>p.id===newProduct.id)
      if (existingProduct && existingProduct.quantity>1 )
        {
          existingProduct.quantity-=1
      }
    },
    removeFromCart:(state, action) => {
      const newProduct = action.payload
      const existingProduct = state.products.find((p)=>p.id===newProduct.id)
      if(existingProduct)
      state.products = state.products.filter(
        (product) => product.id !== newProduct.id
      );     
     }
    },
  },
);

export const { addToCart,decreaseQuantity, removeFromCart } =
cartSlice.actions;

export default cartSlice.reducer;
