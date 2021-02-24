import React from 'react'
import { useCartContext } from './context'

function Header(props) {
  const items = props.items
  const [state, dispatch] = useCartContext()
  return (
    <>
      <div className="header">
        <h1>
          <div>
            Cart:{state.totalItems}
          </div>
            Price:{state.totalPrice}
        </h1>
      </div>
    </>
  )
}

export default Header
