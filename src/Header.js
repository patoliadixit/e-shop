import React from 'react'
import { useCartContext } from './context'

function Header(props) {
  const items = props.items
  const [totalPrice, setTotalPrice, totalItems, setTotalItems] = useCartContext()
  return (
    <>
      <div className="header">
        <h1>
          <div>
            Cart:{totalItems}
          </div>
            Price:{totalPrice}
        </h1>
      </div>
    </>
  )
}

export default Header
