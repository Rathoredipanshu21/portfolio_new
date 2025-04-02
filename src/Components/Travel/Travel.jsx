import React, { useEffect } from 'react';
import './Travel.css'; 
import TravelHero from './TravelHero'
import AOS from 'aos';
import 'aos/dist/aos.css';

import taj_01 from '../Assets/taj_01.jpg'
import taj_02 from '../Assets/taj_02.jpg'
import taj_03 from '../Assets/taj_03.jpg'
import taj_04 from '../Assets/taj_04.jpg'

import har_01 from "../Assets/har_01.jpg";
import har_02 from "../Assets/har_02.jpg";
import rish_01 from "../Assets/rish_01.jpg";
import rish_02 from "../Assets/rish_02.jpg";

import vai_01 from "../Assets/vai_01.jpg";
import vai_02 from "../Assets/vai_02.jpg";
import vai_03 from "../Assets/vai_03.jpg";
import vai_04 from "../Assets/vai_04.jpg";

import dig_01 from "../Assets/dig_01.jpg";
import dig_02 from "../Assets/dig_02.jpg";
import dig_03 from "../Assets/mand4.jpg";
import dig_04 from "../Assets/dig_04.jpg";

import dl_01 from '../Assets/dl_01.jpg';
import dl_02 from '../Assets/dl_02.jpg';
import dl_03 from '../Assets/dl_03.jpg';
import dl_04 from '../Assets/dl_04.jpg';

import ked_01 from "../Assets/ked_01.jpg";
import ked_02 from "../Assets/ked_02.jpg";
import ked_03 from "../Assets/ked_03.jpg";
import ked_04 from "../Assets/ked_04.jpg";

import gol_01 from "../Assets/gol_01.jpg";
import gol_02 from "../Assets/gol_02.jpg";
import gol_03 from "../Assets/gol_03.jpg";
import gol_04 from "../Assets/gol_04.jpg";

import var_01 from "../Assets/var_01.jpg";
import var_02 from "../Assets/var_02.jpg";
import var_03 from "../Assets/var_03.jpg";
import var_04 from "../Assets/var_04.jpg";

import mat_01 from '../Assets/mat_01.jpg';
import mat_02 from '../Assets/mat_02.jpg';
import mat_03 from '../Assets/mat_03.jpg';
import mat_04 from '../Assets/mat_04.jpg';

import man_01 from "../Assets/man_01.jpg";
import man_02 from "../Assets/man_02.jpg";
import man_03 from "../Assets/man_03.jpg";
import man_04 from "../Assets/man_04.jpg";


import dar_01 from "../Assets/dar_01.jpg";
import dar_02 from "../Assets/dar_02.jpg";
import dar_03 from "../Assets/dar_03.jpg";
import dar_04 from "../Assets/dar_04.jpg";


import gan_01 from "../Assets/gan_01.jpg";
import gan_02 from "../Assets/gan_02.jpg";
import gan_03 from "../Assets/gan_03.jpg";
import gan_04 from "../Assets/gan_04.jpg";


import pur1 from '../Assets/pur1.jpg'
import pur2 from '../Assets/pur2.jpg'
import pur3 from '../Assets/pur3.jpg'
import pur4 from '../Assets/pur4.jpg'


import dig1 from '../Assets/dig1.jpg'
import dig2 from '../Assets/dig2.jpg'
import dig3 from '../Assets/dig3.jpg'
import dig4 from '../Assets/dig4.jpg'




const Travel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const travelPlaces = [
    {
      title: "Taj-Mahal Agra",
      images: [
        taj_01,
        taj_02,
        taj_03,
        taj_04
        
      ],
      description: "I visited the Taj Mahal in Agra on August 30, 2021. Known as the symbol of love, the atmosphere was peaceful and enchanting. The breathtaking beauty and intricate craftsmanship of this iconic monument made it an unforgettable experience—truly an incredible sight to behold."
    },
    {
      title: "Haridwar , Rishikesh ",
      images: [
       har_01,
       har_02,
       rish_01,
       rish_02
      ],
      description: "I visited Haridwar and Rishikesh for the first time on September 6, 2021. In Haridwar, I was mesmerized by the beauty of the holy Ganges River. Rishikesh, known as the 'Queen of Hills,' offered stunning views of the mountains and a peaceful, spiritual atmosphere."
    },
    {
      title: "Vaisno Devi , Jammu ",
      images: [
        vai_01,
        vai_02,
        vai_03,
        vai_04
      ],
      description: "I visited Mata Vaishno Devi on November 26, 2021, and felt a deep connection with the divine. The journey was filled with new experiences, meeting people from all walks of life. The scenic beauty and vibrant energy of the place made it an unforgettable and spiritually uplifting experience."
    },
    {
        title: "Mandar Mani Beach , West Bangal",
        images: [
          dig_01,
         dig_02,
         dig_03,
         dig_04
        ],
        description: "I visited Digha Sea Beach, West Bengal, on New Year 2022, experiencing the sea for the first time. The salty water, vibrant atmosphere, and the sight of various fish species made it unforgettable. Meeting different people and exploring a new place added to the excitement of the adventure."
      },
    {
        title: "Delhi , India",
        images: [
            dl_01,
            dl_02,
            dl_03,
            dl_04
        ],
        description: "I have visited Delhi multiple times, exploring iconic landmarks like India Gate, the Lotus Temple, and the Red Fort. Each visit revealed the city's rich history and vibrant culture. From the stunning architecture to the bustling markets, Delhi never fails to captivate me with its numerous attractions and experiences."
      },
    {
        title: "Kedarnath , Uttrakhand",
        images: [
            ked_01,
            ked_02,
            ked_03,
            ked_04
           
        ],
        description: "I visited Kedarnath on June 10, 2022, as part of the Char Dham Yatra. This sacred site offers a breathtaking atmosphere where clouds seem to touch your face, and nature transforms every second. The Himalayan beauty is enchanting, with snow-capped mountains and a chilly climate in June. It was truly one of my favorite trips."
      },

    {
        title: "Golden Temple , Amritsar ",
        images: [
           gol_01,
           gol_02,
           gol_03,
           gol_04
           
        ],
        description: "I visited the Golden Temple in Amritsar on October 20, 2022. It's famous for its stunning architecture and serene ambiance, symbolizing peace and devotion. I also visited the Jallianwala Bagh, a memorial site for the tragic 1919 massacre, highlighting India’s struggle for freedom and the sacrifices made."
      },

    {
        title: "Varanasi , UP ",
        images: [
           var_01,
           var_02,
           var_03,
           var_04
           
        ],
        description: "Visited Varanasi, UP, thrice, with my first visit was on December 30, 2022. This holy city captivated me with its spiritual ambiance. Witnessing the mesmerizing Ganga Aarti and visiting the Kashi Vishwanath Mandir, one of the Jyotirlingas, made it a memorable experience filled with devotion and joy."
      },
    {
        title: "Vrindavan , Mathura  ",
        images: [
         mat_01,
         mat_02,
         mat_03,
         mat_04
           
        ],
        description: " Visited Vrindavan and Mathura for the first time on July 2, 2023. Exploring the enchanting stories of Krishna—from his birth to the Rasleela—was magical. I visited iconic sites like Nidhivan, ISKCON Temple, Prem Mandir, and Krishna Janmabhoomi, all of which preserved the divine atmosphere of this sacred land."
      },

    {
        title: "Puri ,Odisha",
        images: [

           pur1,
           pur2,
           pur3,
           pur4

        
           
        ],
        description: "On December 19, 2023, I visited Puri and Bhubaneswar in Odisha and had an amazing experience. I explored the famous Jagannath Temple and Lingaraj Temple, admiring their stunning architecture. The highlight was Golden Beach in Puri, where I enjoyed the serene waves and beautiful sunset, making unforgettable memories."
      },
    {
        title: "Manali , Himachal  ",
        images: [

            man_01,
            man_02,
            man_03,
            man_04

        
           
        ],
        description: "I visited Manali on New Year's 2024 and was captivated by its stunning natural beauty. Famous for its snow-covered landscapes and adventure sports, the temperature dipped to -7°C. I explored nearby Atal-tunnel , Sissu, Koksar, Mandi, and Kasol, creating unforgettable memories in this picturesque winter wonderland for the first time."
      },
    {
        title: "Darjelling , West Bangal",
        images: [

         dar_01,
         dar_02,
         dar_03,
         dar_04

        
           
        ],
        description: "Visited Darjeeling on August 29, 2024, and was enchanted by its stunning nature and beautiful atmosphere. The tea gardens were breathtaking, and watching the sunrise from Tiger Hill was a memorable experience. With its charming landscapes and friendly people, Darjeeling is truly a remarkable place to explore."
      },
    {
        title: "Gangtok , Sikkim",
        images: [

        gan_01,
        gan_02,
        gan_03,
        gan_04,

        
           
        ],
        description: "Visited Gangtok, Sikkim, on 2nd Sept 2024 a beautiful destination full of new experiences. Exploring Nathula Pass at 14,000 feet, I witnessed rapid weather changes and breathtaking views of Kanchanjunga. The cold was intense, but the stunning scenery and vibrant atmosphere of MG Road made it an unforgettable adventure in this enchanting region."
      },
    {
        title: "Digha Sea Beach , West Bangal ",
        images: [

       dig1,
       dig2,
       dig4,
       dig3,

        
           
        ],
        description: "On January 3, 2025, I visited Digha Sea Beach, Odisha, with friends and had an unforgettable adventure. The highlight was the thrilling banana ride, where we truly felt the rush of life and death. We also enjoyed boating and had endless fun, making it my best adventure memory yet!"
      },

  ];

  return (

    <>
    <TravelHero/>
    <div className="travel-container">
      <h1 className="page-title" style={{color:'yellow'}}>Explore Stunning <span style={{color:'green'}}>Destinations</span></h1>
      <p style={{color:'#fff',padding:'10px'}}>Travel is an essential aspect of human life, offering invaluable opportunities for growth and learning. Exploring new places allows individuals to experience diverse cultures, interact with different people, and discover unique perspectives. Each journey presents a chance to step outside one’s comfort zone, fostering personal development and self-reflection. Through travel, one can learn humility and appreciation for nature’s beauty, which often inspires a shift in mindset. Encountering new landscapes and traditions can lead to profound realizations, helping individuals shed their ego and embrace change. Ultimately, travel enriches our lives with unforgettable experiences and shapes us into more open-minded individuals.</p>
      <div className="travel-grid">
        {travelPlaces.map((place, index) => (
          <div key={index} className="place-card" data-aos="zoom-in">
            <h2 className="place-title">{place.title}</h2>
            <div className="image-grid">
              {place.images.map((imgSrc, idx) => (
                <img key={idx} src={imgSrc} alt={place.title} className="place-image" />
              ))}
            </div>
            <p className="place-description">{place.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Travel;
