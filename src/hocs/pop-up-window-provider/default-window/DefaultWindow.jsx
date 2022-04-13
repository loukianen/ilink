import './default-window.css';

function DefaultWindow(props) {
  const text = props.text ?? 'Default pop up window';
  const { onClose } = props;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return (
    <div className="pop-up-window" style={{top: `calc(${scrollTop}px + 20vh)`}}>
      <div className="pop-up-window_text">
        {text}
      </div>
      <button className="pop-up-window_button button" type="button" onClick={onClose}>Close</button>
    </div>
  );
}

export default DefaultWindow;
