import './review-card.css';

function ReviewCard({review}) {
  const {firstName, lastName, date, avatarFilePath, text} = review;
  const renderingDate = date.toLocaleDateString('ru');
  
  return (
    <article className="review-card">
      <div className="review-header">
        <img src={avatarFilePath} className="review-card-avatar_img" alt="Аватар" />
        <span>{firstName}</span>
        <span className="last-name">{lastName}</span>
        <div className="review-card-date">{renderingDate}</div>
      </div>
      <div className="review-card-text">{text}</div>
    </article>
  );
}

export default ReviewCard;
