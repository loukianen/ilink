import './reviews-list.css';
import ReviewCard from '../review-card/ReviewCard';

function ReviewsList({reviews}) {
  return (
    <div className="review-block_reviews">
      {reviews.map((item) => (
        <ReviewCard key={item.id} review={item} />
      ))}
    </div>
  );
}

export default ReviewsList;
