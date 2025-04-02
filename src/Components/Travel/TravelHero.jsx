import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlane, faCompass } from '@fortawesome/free-solid-svg-icons';
import explore from '../Assets/travel.jpg';
import './TravelHero.css'; // Import CSS file

const TravelHero = () => {
  return (
    <div className="hero-container">
      <section className="travel-hero">
        <div className="text-content">
          <h1 className="title">
            <FontAwesomeIcon icon={faGlobe} className="icon" /> Wonderlust
          </h1>
          <p className="subtitle">
            <FontAwesomeIcon icon={faPlane} className="icon" /> Dream to Explore the World
          </p>
          <p className="description">
            <FontAwesomeIcon icon={faCompass} className="icon" /> Join me on an incredible journey to explore the beauty of this world, one adventure at a time.
          </p>
        </div>
        <img src={explore} alt="Travel Adventure" className="hero-image" />
      </section>
    </div>
  );
};

export default TravelHero;
