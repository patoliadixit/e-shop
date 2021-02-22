import React from 'react'
import { useCartContext } from './context'

function Header(props) {
  const items = props.items
  // console.log(globalState.state.cart);
  console.log(useCartContext);
  const [totalPrice, setTotalPrice, totalItems, setTotalItems] = useCartContext()
  // console.log();
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
