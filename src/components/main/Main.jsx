import { useLayoutEffect, useState } from 'react';
import MainInfoCard from '../main-info-card/MainInfoCard';
import ReviewBlock from '../review-block/ReviewBlock';
import './main.css';

function Main() {
  const [screen, setScreen] = useState('desktop');
  const mainPhoto = screen === 'mobile' ? 'img/304_200.jpg' : 'img/519_383.jpg';

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      const viewportWidth = window.visualViewport.width;
      const correctScreen = viewportWidth < 990 ? 'mobile' : 'decktop';
      if (correctScreen !== screen) {
        setScreen(correctScreen);
      }
    }, 500);
    return () => clearInterval(intervalId);
  });

  return (
    <main>
      <h1 className="main_header">
        Добро пожаловать в академию!
      </h1>
      <div className="main-info">
        <img src={mainPhoto} className="main-info_photo" alt="Константин" />
        <MainInfoCard />
      </div>
      <ReviewBlock screen={screen} />
    </main>
  );
}

export default Main;
