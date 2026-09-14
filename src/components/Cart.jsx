function Cart({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  const subtotal = cart.reduce(
    (sum, food) => sum + food.price * food.quantity,
    0
  )

  const deliveryFee = cart.length > 0 ? 40 : 0

  const total = subtotal + deliveryFee

  return (
    <div className="cart-panel">
      <div className="cart-header">
        <h2>Your Cart</h2>

        <button onClick={onClose}>✕</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((food) => (
              <div className="cart-item" key={food.id}>
                <span>{food.emoji}</span>

                <div className="cart-item-info">
                  <h3>{food.name}</h3>

                  <p>₹{food.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => onDecrease(food.id)}
                    >
                      −
                    </button>

                    <span>{food.quantity}</span>

                    <button
                      onClick={() => onIncrease(food.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => onRemove(food.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div>
              <span>Delivery</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="cart-total">
              <strong>Total</strong>
              <strong>₹{total}</strong>
            </div>
          </div>

          <button
            className="checkout-btn"
            onClick={onCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart

