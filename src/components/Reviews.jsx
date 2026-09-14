function Reviews() {
  const reviews = [
    {
      name: "Rahul",
      rating: 5,
      comment: "The food was delicious and the delivery was very fast!",
    },
    {
      name: "Priya",
      rating: 5,
      comment: "Really good food and great service. Highly recommended!",
    },
    {
      name: "Arjun",
      rating: 4,
      comment: "Great taste and good portion size. Will order again.",
    },
  ]

  return (
    <section className="reviews">
      <h2>What Our Customers Say</h2>

      <p className="reviews-subtitle">
        See what our customers think about Foodie
      </p>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>

            <div className="review-rating">
              {"⭐".repeat(review.rating)}
            </div>

            <p className="review-comment">
              "{review.comment}"
            </p>

            <strong className="review-name">
              — {review.name}
            </strong>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews

