import { useEffect, useState } from "react"

const statuses = [
  "Order Confirmed",
  "Food Being Prepared",
  "Out for Delivery",
  "Delivered",
]

function OrderTracking({ orderId, onBackHome }) {
  const [status, setStatus] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus((current) => {
        if (current < statuses.length - 1) {
          return current + 1
        }

        return current
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="tracking-page">
      <div className="tracking-container">

        <div className="tracking-header">
          <button onClick={onBackHome}>
            ← Back
          </button>

          <h1>Track Your Order</h1>

          <p>Order ID: {orderId}</p>
        </div>

        <div className="fake-map">

          <div className="restaurant-marker">
            🏪
            <span>Restaurant</span>
          </div>

          <div
            className="delivery-marker"
            style={{
              left: `${15 + status * 25}%`,
            }}
          >
            🚴
          </div>

          <div className="customer-marker">
            📍
            <span>You</span>
          </div>

          <div className="route-line"></div>

        </div>

        <div className="delivery-status">

          {statuses.map((item, index) => (
            <div
              className={`status-item ${
                index <= status ? "completed" : ""
              }`}
              key={item}
            >
              <div className="status-icon">
                {index <= status ? "✓" : "○"}
              </div>

              <div>
                <strong>{item}</strong>

                {index === status && (
                  <p>
                    {index === 0 &&
                      "Your order has been received."}

                    {index === 1 &&
                      "The restaurant is preparing your food."}

                    {index === 2 &&
                      "Your delivery partner is on the way."}

                    {index === 3 &&
                      "Your food has been delivered."}
                  </p>
                )}
              </div>
            </div>
          ))}

        </div>

        <div className="delivery-info">

          <div>
            <span>Estimated Delivery</span>

            <strong>
              {status === 3
                ? "Delivered"
                : "20–25 minutes"}
            </strong>
          </div>

          <div>
            <span>Delivery Partner</span>

            <strong>Rahul 🚴</strong>
          </div>

        </div>

      </div>
    </section>
  )
}

export default OrderTracking

