import React, { createContext, useState } from 'react'
const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  return (
    <CartContext.Provider value={[totalPrice, setTotalPrice, totalItems, setTotalItems]}>
      {children}
    </CartContext.Provider>
  )
}
export const useCartContext = () => { return React.useContext(CartContext) }
export { CartContext, CartProvider }