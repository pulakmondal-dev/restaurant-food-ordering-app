function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>🍔 Foodie</h2>
          <p>
            Delicious food delivered to your doorstep.
            Fresh, tasty and made with love.
          </p>
        </div>

        <div className="footer-details">
          <h3>Restaurant Details</h3>

          <div className="footer-detail">
            <span>📍</span>
            <div>
              <strong>Address</strong>
              <p>
                123 Food Street, Kolkata<br />
                West Bengal 700001
              </p>
            </div>
          </div>

          <div className="footer-detail">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="footer-detail">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>support@foodie.com</p>
            </div>
          </div>
        </div>

        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <p>Monday – Sunday</p>
          <strong>10:00 AM – 11:00 PM</strong>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Foodie. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer