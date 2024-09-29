import React from 'react'
import { useSelector } from 'react-redux'
import ItemsList from './ItemsList'

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className='flex items-center flex-col'>

        <ItemsList items={cartItems}/>        

    </div>
  )
}

export default Cart