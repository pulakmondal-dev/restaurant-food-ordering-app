import { useState } from "react"
import foodData from "../data/foodData"

function FoodCard({
  selectedCategory,
  onAddToCart,
  searchTerm,
  onSearchChange,
}) {
  const [selectedFood, setSelectedFood] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const filteredFoods = foodData.filter((food) => {
    const matchesCategory = selectedCategory
      ? food.category === selectedCategory
      : true

    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const openFoodDetails = (food) => {
    setSelectedFood(food)
    setQuantity(1)
  }

  const closeFoodDetails = () => {
    setSelectedFood(null)
    setQuantity(1)
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(selectedFood)
    }

    closeFoodDetails()
  }

  return (
    <section className="food-section">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>

      <h2>
        {selectedCategory
          ? `${selectedCategory} Food (${filteredFoods.length})`
          : `Popular Dishes (${filteredFoods.length})`}
      </h2>

      <p>Discover some of our favorite foods</p>

      <div className="food-list">
        {filteredFoods.map((food) => (
          <div
            className="food-card"
            key={food.id}
            onClick={() => openFoodDetails(food)}
          >
            <div className="food-image">{food.emoji}</div>

            <h3>{food.name}</h3>

            <p>{food.description}</p>

            <div className="food-bottom">
              <strong>₹{food.price}</strong>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToCart(food)
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedFood && (
        <div className="food-details">
          <button
            className="close-details"
            onClick={closeFoodDetails}
          >
            ✕
          </button>

          <div className="food-details-image">
            {selectedFood.emoji}
          </div>

          <h2>{selectedFood.name}</h2>

          <p className="food-details-category">
            {selectedFood.category}
          </p>

          <div className="food-rating">
            ⭐ 4.5
          </div>

          <p>{selectedFood.description}</p>

          <h3>₹{selectedFood.price * quantity}</h3>

          <div className="details-quantity">
            <button
              onClick={() =>
                setQuantity((current) => Math.max(1, current - 1))
              }
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity((current) => current + 1)
              }
            >
              +
            </button>
          </div>

          <button
            className="details-cart-btn"
            onClick={handleAddToCart}
          >
            Add {quantity} to Cart
          </button>
        </div>
      )}
    </section>
  )
}

export default FoodCard

