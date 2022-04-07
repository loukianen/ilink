import './reviews-list.css';
import ReviewCard from '../review-card/ReviewCard';

const swipeMovementLimit = 150;

function ReviewsList({reviews, onSwipe}) {
  let initTouchPoint;

  const swipePage = (diff) => {
    const direction = diff < 0 ? 'right' : 'left';
    onSwipe(direction);
  };

  const handleTouchStart = (evt) => {
    initTouchPoint = evt.changedTouches[0].pageX;
  };
  
  const handleTouchEnd = (evt) => {
    const finalTouchPoint = evt.changedTouches[0].pageX;
    const pointsDiff = finalTouchPoint - initTouchPoint;
    if (Math.abs(pointsDiff) > swipeMovementLimit) {
      swipePage(pointsDiff);
    }
  };

  return (
    <div className="review-block_reviews" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {reviews.map((item) => (
        <ReviewCard key={item.id} review={item} />
      ))}
    </div>
  );
}

export default ReviewsList;
