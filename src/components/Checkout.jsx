function Checkout({ cart, onBack, onPlaceOrder }) {
  const subtotal = cart.reduce(
    (sum, food) => sum + food.price * food.quantity,
    0
  )

  const deliveryFee = cart.length > 0 ? 40 : 0

  const total = subtotal + deliveryFee

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <button onClick={onBack}>← Back to Cart</button>

        <h2>Checkout</h2>
      </div>

      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Delivery Address</h3>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            placeholder="Delivery Address"
            rows="4"
          />

          <h3>Payment Method</h3>

          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              defaultChecked
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="online"
            />
            Online Payment
          </label>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>

          {cart.map((food) => (
            <div className="checkout-item" key={food.id}>
              <span>
                {food.name} × {food.quantity}
              </span>

              <span>
                ₹{food.price * food.quantity}
              </span>
            </div>
          ))}

          <div className="checkout-line">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="checkout-line">
            <span>Delivery</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="checkout-total">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>

          <button
            className="place-order-btn"
            onClick={onPlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  )
}

export default Checkout
