function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">🍴 Fresh & Delicious</p>

        <h1>
          Delicious food,
          <br />
          delivered to you
        </h1>

        <p className="hero-text">
          Discover delicious meals from your favorite restaurants
          and enjoy them at your doorstep.
        </p>

        <div className="hero-buttons">
          <button>Order Now</button>
          <button className="secondary-btn">Explore Menu</button>
        </div>
      </div>

      <div className="hero-image">
        <div>🍔</div>
      </div>
    </section>
  )
}

export default Hero