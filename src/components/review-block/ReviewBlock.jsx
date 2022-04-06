import { useState } from 'react';
import ReviewsList from '../reviews-list/ReviewsList';
import ProgressBar from '../progress-bar/ProgressBar';
import './review-block.css';
import getReviews from '../../sources/reviews';

const defaultPaginationIndex = 0;

const getActiveBar = (isItTheBegining, isItTheEnd) => {
  if (isItTheBegining) {
    return 0;
  }
  if (isItTheEnd ) {
    return 2;
  }
  return 1;
};

const getArrowClassName = (direction, shouldBeActive) => {
  const activeOption = shouldBeActive ? 'active' : 'not-active';
  return `turn-carusel-button ${direction} ${activeOption}`;
}

const getAvailableReviews = (resetIndex, data = [], index = defaultPaginationIndex, screenType = 'desktop') => {
  if (data.length === 0 || !data[index]) {
    resetIndex(defaultPaginationIndex);
    return [];
  }
  if (screenType === 'mobile') {
    return [data[index]];
  }
  const mainReview = data[index];
  if (data[index + 1]) {
    return [mainReview, data[index + 1]];
  }
  if (data[index - 1]) {
    return [data[index - 1], mainReview];
  }
  return [mainReview];
};

function ReviewBlock({screen}) {
  const reviews = getReviews().sort((a, b) => b.date.getTime() - a.date.getTime());
  const [paginationIndex, setPaginationIndex] = useState(defaultPaginationIndex);

  const isPaginationIndexInTheBeginig = paginationIndex === 0 || paginationIndex === undefined;
  const isPaginationIndexInTheEnd = paginationIndex === undefined || paginationIndex >= reviews.length - 2;

  const handleAddReviewButtonClick = () => {
    alert('Здесь будет добавление отзыва');
  };

  const handleArrowClick = (evt) => {
    const direction = evt.target.value;
    const diff = direction === 'right' ? 1 : -1;
    const newIndex = paginationIndex + diff;
    if (newIndex >= 0 && newIndex <= reviews.length - 1) {
      setPaginationIndex(newIndex);
    }
  };

  const aviailableReviews = getAvailableReviews(setPaginationIndex, reviews, paginationIndex, screen);
  const activeBar = getActiveBar(isPaginationIndexInTheBeginig, isPaginationIndexInTheEnd);

  const leftArrowClass = getArrowClassName('left', !isPaginationIndexInTheBeginig);
  const rightArrowClass = getArrowClassName('right', !isPaginationIndexInTheEnd);

  return (
    <section className="review-block">
      <div className="review-block_content-wrapper">
        <div className="review-block_header">
          <div className="review-block_header__header">Отзывы</div>
          <button type="button" className="review-block_header-add-review-button button" onClick={handleAddReviewButtonClick}>
            <img src="img/white-plus.png" width="14.3" height="14.3" alt="Плюс" />
            <span className="review-block_header-add-review-button-label">Добавить отзыв</span>
          </button>
        </div>
        <ReviewsList reviews={aviailableReviews} />
        <ProgressBar activeBar={activeBar} />
      </div>
      <button type="button" value="left" className={leftArrowClass} onClick={handleArrowClick}></button>
      <button type="button" value="right" className={rightArrowClass} onClick={handleArrowClick}></button>
    </section>
  );
}

export default ReviewBlock;