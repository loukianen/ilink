import './review-form.css';
import { useEffect, useState } from 'react';
import FileLoading from '../file-loading/FileLoading';

const MIN_REVIEW_TEXT = 50;
const MAX_REVIEW_TEXT = 200;
const MAX_FILE_SIZE = 1000000;


function ReviewForm(props) {
  const { onClose, onReturnSubmitResult } = props;
  const [userName, setUserName] = useState('');
  const [files, setFiles] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [fileLoadingState, setFileLoadingState] = useState('not started');

  const cancelChoosingFile = () => {
    setFileLoadingState('not started');
    setFiles([]);
    const inputFileElement = document.getElementById('choosing-file');
    inputFileElement.value = '';
  };

  const validateFile = (files) => {
    const fileSize = files[0].size;
    if (fileSize > MAX_FILE_SIZE) {
      setFiles([]);
      setFileLoadingState('failed');
    }
  };

  const handleChoosingFile = (evt) => {
    try {
      setFileLoadingState('started');
      const data = evt.target.files;
      if (data.length && data.length > 0) {
        setFiles(data);
        validateFile(data);
      } else {
        throw new Error('Choosing file failed');
      }
    } catch (e) {
      cancelChoosingFile();
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const fileName = files.length > 0 ? files[0].name : files;
    alert(`user name: ${userName}\nfilename: ${fileName}\nreview text: ${reviewText}\n`);
    try {
      setUserName('');
      setFiles([]);
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

  const handleInfoButtonClick = () => {
    alert('Здесь будет ссылка на дополнительную информацию');
  };

  const handleInputBlur = () => {
    const inputLabelElement = document.getElementById('choosing-file-label');
    inputLabelElement.classList.remove('focus');
  };
  
  const handleInputFocus = () => {
    const inputLabelElement = document.getElementById('choosing-file-label');
    inputLabelElement.classList.add('focus');
  };

  const handleReviewTextChange = ({ target }) => {
    setReviewText(target.value);
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
        <input type="file" name="file" id="choosing-file" className="review-form_input-file-field" accept=".jpg, .jpeg" onFocus={handleInputFocus} onBlur={handleInputBlur} onChange={handleChoosingFile}  disabled={files.length > 0} />
        <label htmlFor="choosing-file" id="choosing-file-label" className="review-form_load-photo-button button">
          <img src="img/white-plus.png" alt="Плюс" />
          <span className="review-form_load-photo-button-label">Загрузить фото</span>
        </label>
      </div>
      {fileLoadingState !== 'not started' && <FileLoading loadingState={fileLoadingState} files={files} onCancelChoosingFile={cancelChoosingFile} onSetFileLoadingState={setFileLoadingState}/>}
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
