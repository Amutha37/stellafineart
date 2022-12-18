import { Link } from 'react-router-dom';

// import { QuotesHome } from '../../Helpers/AllQuotes/quotes';
import Artist from '../Artist/artist';
import Testimonial from '../Testimonial/testimonial';
import { blueThumb } from '../../Assets/Images/Images';
// import paintBrush from '../../Assets/Images/globalimages/smallbrushes.jpg';
import squirrelPaint from '../../Assets/Images/globalimages/squirrelPaint.jpg';
import macaw from '../../Assets/Images/wildlife/blueandgoldmacaw.jpg';
import Effieimage1 from '../../Assets/Images/portrait/Effieimage1.jpg';
import Effieimage2 from '../../Assets/Images/portrait/Effieimage2.jpg';
import Effievideo from '../../Assets/Videos/Effievideo.mp4';

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
            <p id="blink">NEW & EXCITING WORKSHOP </p>
            <p className="shirt">Paint a T-shirt </p>
            <p className="place ">South-West Sydney</p>
          </div>
          <div className="home-images-row">
            <div className="home-image-column">
              <img src={squirrelPaint} alt="squirrelPaint" />
              {/* <img src={paintBrush} alt="paintBrushes" /> */}
            </div>
          </div>

          <div className="headpaint">
            <div id="class_details1">
              <p className="ages_home">January 2023 school holidays</p>
              <p>Dates - Friday 6th, 13th & 20th</p>
              <p>Times - 9:30 am - 12pm</p>
              <p>Cost $40 per child</p>
              {/* <p id="discount">
                (Early bird special 10% off if booked before 28 Nov'22)
              </p> */}
              <p>Ages - 8 - 16 years</p>
              <p>Just bring a T-shirt and a water bottle.</p>
              {/* <p className="ages_home">Stella's Fine-Art now teaching</p>
              <p className="ages_home">
                Children's Art Classes ages 8 - 14 years.
              </p> */}
              <p>
                {/* For more information click{' '} */}
                For more information contact me {''}
                <em>
                  {/* <Link to="/classes" */}
                  <Link to="/contact" className="enquire_now">
                    here.
                  </Link>
                </em>
              </p>
              <p>* Limited spaces available *</p>
            </div>
          </div>
        </div>{' '}
        {/* effie painting  start*/}
        <div className="effie-container">
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
                <p className="paint-Effie">Video progress</p>
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
        </div>
        {/* macaw painting */}
        <div className="macaw-container">
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
        </div>
      </div>
      <Testimonial />
      <Artist />
    </div>
  );
};

export default Home;
