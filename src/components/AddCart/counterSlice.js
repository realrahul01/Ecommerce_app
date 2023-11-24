import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts: [],
  totalQuantity : 0,
  totalPrice : 0,  
  val:false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCart: (state,action) => {
      let find = state.carts.findIndex((item)=> item.id === action.payload.id) //basically what i am doing here i dont want that if user already selected a particular item it will go into the cart again rather than i want to increase its quantity 
      if(find >= 0){
        state.carts[find].quantity += 1
      }else{
        state.carts.push(action.payload);
      }
    },
    increaseItemQuantity : (state,action) =>{
      state.carts = state.carts.map((item)=>{
        if(item.id === action.payload){
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    },
    decreaseItemQuantity : (state,action) =>{
      state.carts = state.carts.map((item)=>{
        if(item.id === action.payload){
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    },
    removeItem : (state,action)=>{
      state.carts = state.carts.filter((item)=>{
        return item.id !== action.payload
      })
    },
    setLoginStatus : (state,action)=>{
      state.val = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addCart,increaseItemQuantity,decreaseItemQuantity,removeItem,setLoginStatus} = counterSlice.actions

export default counterSlice.reducer