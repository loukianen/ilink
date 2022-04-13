import './header.css';
import { useContext } from 'react';
import { PopUpContext } from '../../hocs/pop-up-window-provider/PopUpWindowProvider';

function Header() {
  const { onShow } = useContext(PopUpContext);
  const handleControlPanelButtonClick = () => {
    onShow('Здесь будет панель управления');
  };

  return (
    <header>
      <div className='header_avatar'>
        <img src="img/avatar.jpg" className="avatar_img" alt="avatar" />
        <span>Константин</span>
        <span className="last-name">Лукьяненок</span>
      </div>
      <div className="static-elements-wrapper">
      <a href="https://ilink.dev/" target="_blank" rel="noreferrer"><img src="img/logo.png" className='logo' alt="logo" /></a>
      <button type="button" className="header_menu-button button" onClick={handleControlPanelButtonClick}>Панель управления</button>
      <button type="button" className="header_menu-button__mobile button" onClick={handleControlPanelButtonClick}></button>
      </div>
    </header>
  );
}

export default Header;
