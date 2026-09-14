function Categories({ onCategorySelect }) {
  return (
    <section className="categories">
      <h2>Explore Categories</h2>
      <p>Discover food from India and Kolkata</p>

      <div className="category-list">

        <div
          className="category-card"
          onClick={() => onCategorySelect("Bengali")}
        >
          <span>🍛</span>
          <h3>Bengali</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Biryani")}
        >
          <span>🍚</span>
          <h3>Biryani</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("North Indian")}
        >
          <span>🥘</span>
          <h3>North Indian</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("South Indian")}
        >
          <span>🥞</span>
          <h3>South Indian</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Chinese")}
        >
          <span>🍜</span>
          <h3>Chinese</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Kathi Rolls")}
        >
          <span>🌯</span>
          <h3>Kathi Rolls</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Momos")}
        >
          <span>🥟</span>
          <h3>Momos</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Street Food")}
        >
          <span>🍢</span>
          <h3>Street Food</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Healthy")}
        >
          <span>🥗</span>
          <h3>Healthy</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Desserts")}
        >
          <span>🍰</span>
          <h3>Desserts</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Beverages")}
        >
          <span>🍵</span>
          <h3>Beverages</h3>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("Fast Food")}
        >
          <span>🍔</span>
          <h3>Fast Food</h3>
        </div>

      </div>
    </section>
  )
}

export default Categories