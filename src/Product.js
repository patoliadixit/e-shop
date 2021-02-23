import React from 'react'
import "./Product.css"
import { useCartContext } from "./context"

function Product(props) {
  const [totalPrice, setTotalPrice, totalItems, setTotalItems, items, setItems] = useCartContext()
  const product = props.product
  const id = product.id
  const addToCart = (e) => {
    e.preventDefault()
    setTotalItems(previous => previous + 1)
    setTotalPrice(previous => previous + product.price)
    const updateItemQuant = (item) => {
      let _item = Object.assign({}, item)
      _item.in_cart++
      return _item
    }
    const addItemToCart = (prvState, _id) => {
      let _product = Object.assign({}, product)
      let _prvState = [...prvState]
      if (_prvState.length == 0) {
        _prvState = _prvState.concat(updateItemQuant(_product))
      }
      else {
        let inPrvState = false
        for (let item of _prvState) {
          if (item.id == _id) {
            let updatedItem = updateItemQuant(item)
            _prvState = _prvState.filter((i) => {
              return i != item
            })
            _prvState = _prvState.concat(updatedItem);
            inPrvState = !inPrvState
          }
        }
        if (!inPrvState) {
          _prvState = _prvState.concat(updateItemQuant(_product))
        }
      }
      return _prvState
    }
    setItems(previous => addItemToCart(previous, product.id))
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
