import './review-form.css';
import { useEffect, useState } from 'react';
import FileLoading from '../file-loading/FileLoading';

const MIN_REVIEW_TEXT = 50;
const MAX_REVIEW_TEXT = 200;


function ReviewForm(props) {
  const { onClose, onReturnSubmitResult } = props;
  const [userName, setUserName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const handleInfoButtonClick = () => {
    alert('Здесь будет ссылка на дополнительную информацию');
  };

  const handleReviewTextChange = ({ target }) => {
    setReviewText(target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    alert(`user name: ${userName}\nreview text: ${reviewText}\n`);
    try {
      setUserName('');
      setReviewText('');
      if (isFormValid) {
        onReturnSubmitResult('success');
      } else {
        throw new Error('Form is invalid');
      }
      onClose();
    } catch(e) {
      onReturnSubmitResult('fail');
      onClose();
    }
  };

  const handleUserNameChange = ({ target }) => {
    setUserName(target.value);
  };

  useEffect(() => {
    const [name, surname] = userName.split(' ');
    if (name && surname) {
      const validationResult = name.length > 0 && surname.length > 0 && reviewText.length >= MIN_REVIEW_TEXT;
      setIsFormValid(validationResult);
    } else {
      setIsFormValid(false);
    }
  }, [userName, reviewText]);

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return (
    <form className="review-form" style={{top: `calc(${scrollTop}px + 20vh)`}} onSubmit={handleFormSubmit}>
      <div className="review-form_header">
        <span>Отзыв</span>
        <button type="button" className="review-form_close-button" onClick={onClose}></button>
      </div>
      <label htmlFor="author-name" className="review-form_author-label">Как вас зовут?</label>
      <div className="review-form_authore-info">
        <input className="review-form_authore-input" type="text" name="author-name" id="author-name" placeholder="Имя Фамилия" title="Поле должно содержать имя и фамилию" required value={userName} onChange={handleUserNameChange} />
        <input type="file" name="file" id="choosing-file" className="review-form_input-file-field" accept=".jpg, .jpeg, .png" hidden/>
        <label htmlFor="choosing-file" className="review-form_load-photo-button button">
          <img src="img/white-plus.png" alt="Плюс" />
          <span className="review-form_load-photo-button-label">Загрузить фото</span>
        </label>
      </div>
      <FileLoading />
      <label htmlFor="author-text" className="review-form_text-label">Все ли вам понравилось?</label>
      <div className="review-form_review-text-wrapper">
        <textarea className="review-form_review-text" id="author-text" placeholder="Напишите пару слов о вашем опыте..." maxLength={MAX_REVIEW_TEXT} required value={reviewText} onChange={handleReviewTextChange}></textarea>
        <div className="review-form_chares-counter">{reviewText.length}/{MAX_REVIEW_TEXT}</div>
      </div>
      <div className="review-form_footer">
        <button type="submit" className="review-form_submit-button">Отправить отзыв</button>
        <div className="review-form_footer-warning">
          <button type="button" className="review-form_info-button" width="15.42" height="15.42" onClick={handleInfoButtonClick}></button>
          <span className="review-form_warning-text">Все отзывы проходят модерацию в течение 2 часов</span>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
