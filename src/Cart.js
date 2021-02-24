import React from 'react'
import { useCartContext } from './context'
import product_list from "./List"
function Cart() {
  const [state, dispatch] = useCartContext()
  let itemss = state.items
  return (
    <div>
      Cart
      {itemss.map((item) => <div>{item.title}":::::"{item.in_cart}</div>)}
    </div>
  )
}

export default Cart
