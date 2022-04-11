import './message.css';

const contentMapping = {
  success: {
    header: 'Успешно!',
    text: 'Спасибо за отзыв о нашей компании :)',
    color: '#333333',
  },
  fail: {
    header: 'Что-то не так...',
    text: 'Не получилось отправить отзыв. Попробуйте ещё раз!',
    color: '#FFFFFF',
  },
};

const getContent = (type) => contentMapping[type];

function Message(props) {
  const { type, onCloseMessage } = props;
  
  const handleCloseButtonClick = () => {
    onCloseMessage();
  };

  const { header, text, color } = getContent(type);

  return (
    <div className={`message-wrapper ${type}`} >
      <div className="message" style={{color: color}}>
        <div className="message-header">
          <span>{header}</span>
          <button type="button" className={`message-close-button__header ${type}`} onClick={handleCloseButtonClick}></button>
        </div>
        <p>{text}</p>
      </div>
      <button type="button" className={`message-close-button__art ${type}`} onClick={handleCloseButtonClick}></button>
    </div>
  );
}

export default Message;
