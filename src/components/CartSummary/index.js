// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalPrice = 0
      cartList.forEach(each => {
        totalPrice += each.price * each.quantity
      })
      const noOfItems = cartList.length

      return (
        <div className="Cart-summary-container">
          <div className="CartSummary">
            <h1 className="cart-summary-heading">
              Order Total:{' '}
              <span className="total-price">{`Rs ${totalPrice}/-`}</span>
            </h1>
            <p className="cart-summary-sub-heading">
              {noOfItems} Items in Cart
            </p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
