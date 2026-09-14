import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import FoodCard from "./components/FoodCard"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import OrderConfirmation from "./components/OrderConfirmation"
import OrderTracking from "./components/OrderTracking"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showTracking, setShowTracking] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [orderTotal, setOrderTotal] = useState(0)

  const addToCart = (food) => {
    const existingFood = cart.find((item) => item.id === food.id)

    if (existingFood) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...food, quantity: 1 }])
    }
  }

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const placeOrder = () => {
    const subtotal = cart.reduce(
      (sum, food) => sum + food.price * food.quantity,
      0
    )

    const deliveryFee = cart.length > 0 ? 40 : 0

    const total = subtotal + deliveryFee

    const newOrderId =
      "FD-" + Date.now().toString().slice(-8)

    setOrderId(newOrderId)
    setOrderTotal(total)

    setCart([])
    setShowCheckout(false)
    setShowConfirmation(true)
  }

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
      />

      {!showCheckout && !showConfirmation && !showTracking && (
        <>
          <Hero />

          <Categories
            onCategorySelect={(category) =>
              setSelectedCategory(category)
            }
          />

          <FoodCard
            selectedCategory={selectedCategory}
            onAddToCart={addToCart}
            searchTerm={searchTerm}
            onSearchChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          <Reviews />

          <Footer />
        </>
      )}

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onCheckout={() => {
            setShowCart(false)
            setShowCheckout(true)
          }}
        />
      )}

      {showCheckout && (
        <Checkout
          cart={cart}
          onBack={() => setShowCheckout(false)}
          onPlaceOrder={placeOrder}
        />
      )}

      {showConfirmation && (
        <OrderConfirmation
          orderId={orderId}
          total={orderTotal}
          onBackHome={() => setShowConfirmation(false)}
          onTrackOrder={() => {
            setShowConfirmation(false)
            setShowTracking(true)
          }}
        />
      )}

      {showTracking && (
        <OrderTracking
          orderId={orderId}
          onBackHome={() => setShowTracking(false)}
        />
      )}
    </div>
  )
}

export default App

