import './default-window.css';

function DefaultWindow(props) {
  const text = props.text ?? 'Default pop up window';
  const { onClose } = props;

  return (
    <div className="pop-up-window">
      <div className="pop-up-window_text">
        {text}
      </div>
      <button className="pop-up-window_button" type="button" onClick={onClose}>Close</button>
    </div>
  );
}

export default DefaultWindow;
