function Navbar({ cartCount, onCartClick }) {
  return (
    <nav>
      <h2>🍔 Foodie</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button onClick={onCartClick}>
        🛒 Cart ({cartCount})
      </button>
    </nav>
  )
}

export default Navbar