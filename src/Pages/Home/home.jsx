import { Link } from 'react-router-dom';

// import { QuotesHome } from '../../Helpers/AllQuotes/quotes';
import Artist from '../Artist/artist';
import Testimonial from '../Testimonial/testimonial';
import kidsworkshop from '../../Assets/Images/globalimages/kidsworkshop.jpg';

import './homestyles.css';

const Home = () => {
  // const PrintQuotes = QuotesHome();

  return (
    <div className="home_Container">
      <header>
        {/* home page */}
        <div className="landing_Container">
          <div className="landing_Image">
            {/* space for display banner on css */}
          </div>
        </div>
      </header>

      <div>
        <div className="paintbrush_text">
          <div className="headpaint">
            {/* <h1>Children's Art Classes </h1> */}
            {/* <p id="blink">NEW & EXCITING ART CLASSES </p> */}
            <p id="blink">ART CLASSES FOR CHILDREN</p>
            {/* <p className="shirt">Paint a T-shirt </p> */}
            <p className="place "> Location : Campbelltown-Sydney</p>
          </div>
          <div className="home-images-row">
            <div className="home-image-column">
              <img src={kidsworkshop} alt="paintBrushes" />
            </div>
          </div>

          <div className="headpaint">
            <div id="class_details1">
              {/* term class note starts here */}
              {/* <p className="ages_home">January 2023 school holidays</p>
              <p>Dates - Monday 16th January</p>
              Ages 6 - 9 years
              <p>Dates - Wednesday 18th January</p>
              Ages 10 - 14 years
              <p>Times - 9:30 am - 12pm</p>
              <p>Cost $40 per child</p> */}
              {/* term note ends here */}
              {/* <p id="discount">
                (Early bird special 10% off if booked before 28 Nov'22)
              </p> */}
              {/* <p>Just bring a T-shirt and a water bottle.</p> */}
              <p className="ages_home">Stella's Fine-Art teaching</p>
              <p className="ages_home">
                Children's Art Classes and School Holiday Workshop ages 8 - 14
                years.
              </p>
              <p>
                For more information click{' '}
                {/* For more information contact me {''} */}
                <em>
                  {/* <Link to="/contact"*/}
                  <Link to="/classes" className="enquire_now">
                    here.
                  </Link>
                </em>
              </p>
              {/* <p>
                * Book before Thursday 12th January 2023 FOR A 10% DISCOUNT *
              </p> */}
            </div>
          </div>
        </div>{' '}
        {/* effie painting  start*/}
        {/* <div className="effie-container">
          <div className="new_painting_title_effie">
            <p>Painting and Drawing</p>
          </div>

          <div className="effie-images-row">
            <div className="effie-image-column  effimg1">
              <img
                src={Effieimage1}
                alt="painting"
                loading="lazy"
                height="550px"
              />
              <div>
                <p className="paint-Effie">Live Drawing of Effie</p>
                <p>(2022 oil on canvas)</p>
              </div>
            </div>
          </div>

          <div className="effie-images-row">
            <div className="effie-image-column ">
              <video width="750" height="500" controls>
                <source src={Effievideo} type="video/mp4" />
              </video>
              <div>
                <p className="paint-Effie">Progress video</p>
              </div>
            </div>
          </div>

          <div className="effie-images-row">
            <div className="effie-image-column effimg2">
              <img
                src={Effieimage2}
                id="finishEffie"
                alt="painting"
                loading="lazy"
              />

              <div>
                <p className="paint-Effie">Finished result</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* macaw painting */}
        {/* <div className="macaw-container">
          <div className="new_painting_title">
            <p>Blue and Gold Macaw{''}</p>

            <div id="quickLink_bluethumb_center">
              <p>Click below ⤵️ to buy {''}</p>
              <a
                href="https://bluethumb.com.au/stella-kypriotis"
                id="bluethumb-link">
                {''}
              </a>
              {blueThumb}
            </div>
          </div>

          <div className="macaw-images-row">
            <div className="macaw-image-column">
              <img src={macaw} alt="Blue and Gold Macaw" />
            </div>
          </div>
        </div> */}
      </div>

      <Testimonial />
      <Artist />
    </div>
  );
};

export default Home;
