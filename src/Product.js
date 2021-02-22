import React from 'react'
import "./Product.css"
import { useCartContext } from "./context"

function Product(props) {
  const [totalPrice, setTotalPrice, totalItems, setTotalItems] = useCartContext()
  const product = props.product
  const addToCart = (e) => {
    e.preventDefault()
    setTotalItems(previous => previous + 1)
    setTotalPrice(previous => previous + product.pricec)
    console.log("hi" + product.price);
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
        <button onClick={addToCart}>Click</button>
      </div>
    </>
  )
}

export default Product
