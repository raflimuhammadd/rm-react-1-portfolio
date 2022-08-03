import React from 'react';
import HeroImage from "../assets/images/hero.jpg";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h2> I am A Cooking Chef </h2>
          <p>
            Wardell Stephen Curry II is an American professional 
            basketball player for the Golden State 
            Warriors of the National Basketball Association
          </p>

          <div>
            <button>
              Portfolio
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home