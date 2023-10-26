import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();  
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <div>
      <h1 className='font-bold text-3xl text-center'>Cart Items - {cartItems.length}         <button className='text-lg rounded-sm bg-red-200 p-2 m-5' onClick={()=>handleClearCart()}>Clear Cart</button></h1>
      {cartItems.length === 0 && (
        <div className='text-xl text-center font-bold'>Cart is empty :)</div>
      )}
      <div className='flex justify-evenly'>
        {cartItems.map((item) => {
          return <FoodItem key={item.id} {...item} />;
        })
      }
      </div>
    </div>
  )
}

export default Cart

