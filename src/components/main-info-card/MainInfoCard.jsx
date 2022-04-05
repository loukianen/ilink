import './main-info-card.css';

function MainInfoCard() {
  return (
    <section className="main-info-card">
      <div className="main-info-card_header">
        <div className="main-info-card_header__name">Константин Лукьяненок</div>
        <div className="main-info-card_header__birthdate">15.12.1974</div>
      </div>
      <div className="main-info-card_header__items">
        <div className="main-info-card_header__item">
          <span>Город:</span>
          Томск
        </div>
        <div className="main-info-card_header__item">
          <span>Пол:</span>
          Мужчина
          <img src="img/icon-male.png" width="17" height="17" alt="Пол" />
        </div>
        <div className="main-info-card_header__item">
          <span>Возраст:</span>
          47
        </div>
      </div>
      <article>
        <span>О себе:</span>Получил образование инженера-экономиста и
          начал работать в Сбербанке. Затем с целью развития карьеры
          получил второе высшее образование в области финансов.
          В общей сложности работал в ведущих банках около 15 лет
          на различных позициях, затем решил сменить направление деятельности.
          Сейчас нахожусь в поиске первой работы веб-разработчиком.
          <br /><br />
          <i>BTW: И да, у меня есть милая кошка :)</i>
      </article>
      <div className="main-info-card_footer">
        <img src="img/icon-pet.png" alt="Иконка еды для домашнего животного" />
        <span>Домашнее животное:</span>
        есть
      </div>
    </section>
  );
}

export default MainInfoCard;
