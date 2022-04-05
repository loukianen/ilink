import { useLayoutEffect, useState } from 'react';
import MainInfoCard from '../main-info-card/MainInfoCard';
import './main.css';

function Main() {
  const [mainPhoto, setMainPhoto] = useState('')

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      const viewportWidth = window.visualViewport.width;
      const correctPhoto = viewportWidth < 990 ? 'img/304_200.jpg' : 'img/519_383.jpg';
      if (correctPhoto !== mainPhoto) {
        setMainPhoto(correctPhoto);
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
     <div className="reviews"></div>
    </main>
  );
}

export default Main;
