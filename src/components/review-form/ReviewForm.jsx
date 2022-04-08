import './review-form.css';

function ReviewForm({onClose}) {
  return (
    <form className="review-form">
      <div className="review-form_header">
        <span>Отзыв</span>
        <button type="button" className="review-form_close-button" onClick={onClose}></button>
      </div>
      <label htmlFor="author-name" className="review-form_author-label">Как вас зовут?</label>
      <div className="review-form_authore-info">
        <input className="review-form_authore-input" type="text" name="author-name" id="author-name" placeholder="Имя Фамилия" title="Поле должно содержать имя и фамилию" required />
        <button type="button" className="review-form_load-photo-button">
          <img src="img/white-plus.png" alt="Плюс" />
          <span className="review-form_load-photo-button-label">Загрузить фото</span>
        </button>
      </div>
      <label htmlFor="author-text" className="review-form_text-label">Все ли вам понравилось?</label>
      <div className="review-form_review-text-wrapper">
        <textarea className="review-form_review-text" id="author-text" placeholder="Напишите пару слов о вашем опыте..." maxLength="200" required defaultValue=""></textarea>
        <div className="review-form_chares-counter">12/200</div>
      </div>
      <div className="review-form_footer">
        <button type="submit" className="review-form_submit-button">Отправить отзыв</button>
        <div className="review-form_footer-warning">
          <button type="button" className="review-form_info-button" width="15.42" height="15.42"></button>
          <span className="review-form_warning-text">Все отзывы проходят модерацию в течение 2 часов</span>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
