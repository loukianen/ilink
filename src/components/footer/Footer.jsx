import './footer.css';
import { useContext } from 'react';
import { PopUpContext } from '../../hocs/pop-up-window-provider/PopUpWindowProvider';

function Footer() {
  const { onShow } = useContext(PopUpContext);
  const handleSocialNetButtonClick = (evt) => {
    const elementClasses = evt.target.getAttribute('class');
    const sourceName = elementClasses.split(' ')[0];
    onShow(`Здесь можно будет поделиться информацией в ${sourceName}`);
  };

  return (
    <footer>
      <div className="footer_copyright">
        &copy;iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
      </div>
      <div className="social-net-icons">
        <button className="twitter social-net-icon" onClick={handleSocialNetButtonClick}></button>
        <button className="reddit social-net-icon" onClick={handleSocialNetButtonClick}></button>
        <button className="telegram social-net-icon" onClick={handleSocialNetButtonClick}></button>
      </div>
    </footer>
  );
}

export default Footer;
