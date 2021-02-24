import React, { createContext, useState, useReducer } from 'react'
const CartContext = createContext()
const initialState = { totalItems: 0, totalPrice: 0, items: [] }
const addToCart = "addToCart"
const addItemToCart = (items, item) => {
  let _items;
  let _item;
  if (items.length == 0) {
    _item = { ...item, in_cart: 1 }
    _items = items.concat(_item)
  } else {
    for (let item_ of items) {
      if (item_.id == item.id) {
        _item = { ...item_, in_cart: (item_.in_cart + 1) }
        _items = items.filter((j) => {
          return j != item_
        })
        _items = _items.concat(_item)
      } else {
        _item = { ...item, in_cart: 1 }
        _items = items.concat(_item)
      }
    }
  }
  return _items
}
const reducer = (state, action) => {
  switch (action.type) {
    case addToCart:
      let items_get = addItemToCart(state.items, action.payload.product)
      return {
        totalItems: state.totalItems + 1,
        totalPrice: (state.totalPrice + action.payload.product.price),
        items: items_get
      }
    default:
      throw new Error
  }
}
const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => { return React.useContext(CartContext) }
export { CartContext, CartProvider }