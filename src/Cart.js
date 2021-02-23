import React from 'react'
import { useCartContext } from './context'
import product_list from "./List"
function Cart() {
  const [totalPrice, setTotalPrice, totalItems, setTotalItems, items, setItems] = useCartContext()

  return (
    <div>
      Cart
      {items.map((item) => <div>{item.title}":::::"{item.in_cart}</div>)}
    </div>
  )
}

export default Cart
