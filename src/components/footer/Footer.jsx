import './footer.css';

function Footer() {
  const handleSocialNetButtonClick = (evt) => {
    const elementClasses = evt.target.getAttribute('class');
    const sourceName = elementClasses.split(' ')[0];
    alert(`Здесь можно будет поделиться информацией в ${sourceName}`);
  };

  return (
    <footer>
      <div className="footer_copyright">
        &copy;iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
      </div>
      <div className="social-net-icons">
        <div className="twitter social-net-icon" onClick={handleSocialNetButtonClick}></div>
        <div className="reddit social-net-icon" onClick={handleSocialNetButtonClick}></div>
        <div className="telegram social-net-icon" onClick={handleSocialNetButtonClick}></div>
      </div>
    </footer>
  );
}

export default Footer;
