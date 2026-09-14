function OrderConfirmation({
  orderId,
  total,
  onBackHome,
}) {
  return (
    <section className="order-confirmation">
      <div className="confirmation-card">
        <div className="success-icon">
          ✓
        </div>

        <h1>Order Confirmed!</h1>

        <p className="confirmation-message">
          Thank you for your order. Your food is being prepared.
        </p>

        <div className="order-info">
          <div>
            <span>Order ID</span>
            <strong>{orderId}</strong>
          </div>

          <div>
            <span>Total Amount</span>
            <strong>₹{total}</strong>
          </div>

          <div>
            <span>Estimated Delivery</span>
            <strong>30–45 minutes</strong>
          </div>
        </div>

        <button
          className="home-btn"
          onClick={onBackHome}
        >
          Back to Home
        </button>
      </div>
    </section>
  )
}

export default OrderConfirmation

