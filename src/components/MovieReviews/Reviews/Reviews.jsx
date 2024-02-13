const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <div>
            <h2>Author {review.author_details.name}</h2>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
