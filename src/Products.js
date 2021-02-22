import React from 'react'
import Product from "./Product"
import "./Products.css"
function Products(props) {
  const product_list = props.product_list
  return (
    <>
      <div className="products">
        {product_list.map((product) =>
          <Product product={product} />
        )}
      </div>
    </>
  )
}

export default Products

