import './header.css';

function Header() {
  const handleControlPanelButtonClick = () => {
    alert('Здесь будет панель управления');
  };

  return (
    <header>
      <div className='header_avatar'>
        <img src="img/avatar.jpg" className="avatar_img" alt="avatar" />
        <span>Константин</span>
        <span className="last-name">Лукьяненок</span>
      </div>
      <div className="static-elements-wrapper">
      <div className='logo'>
        <img src="img/ilink-logo.png" className="logo_ilink" alt="logo" />
        <img src="img/academy-logo.png" className="logo_academy" alt="logo" />
      </div>
      <button type="button" className="header_menu-button button" onClick={handleControlPanelButtonClick}>Панель управления</button>
      <button type="button" className="header_menu-button__mobile button" onClick={handleControlPanelButtonClick}></button>
      </div>
    </header>
  );
}

export default Header;
