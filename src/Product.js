import React from 'react'
import "./Product.css"
import { useCartContext } from "./context"

function Product(props) {
  const [state, dispatch] = useCartContext()
  const product = props.product
  const id = product.id
  const addToCart1 = (e) => {
    e.preventDefault()
    dispatch({ type: 'addToCart', payload: { product } })
  }
  return (
    <>
      <div className="product">
        <div className="img_div">
          <img src={product.img_url} alt="" className="img_class" />
        </div>
        <div className="info">
          <span>{product.title}</span>
        </div>
        <button onClick={addToCart1}>Click</button>
      </div>
    </>
  )
}

export default Product
