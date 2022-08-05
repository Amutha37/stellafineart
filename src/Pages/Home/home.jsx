import { Link } from 'react-router-dom';

// import { QuotesHome } from '../../Helpers/AllQuotes/quotes';
import Artist from '../Artist/artist';
import Testimonial from '../Testimonial/testimonial';
import paintBrush from '../../Assets//Images/globalimages/small brushes.jpg';
import { blueThumb } from '../../Assets/Images/Images';
import macaw from '../../Assets//Images/wildlife/blueandgoldmacaw.jpg';
import Effieimage1 from '../../Assets//Images/portrait/Effieimage1.jpg';
import Effieimage2 from '../../Assets//Images/portrait/Effieimage2.jpg';
import Effievideo from '../../Assets//Images/portrait/Effievideo.mp4';

import './homestyles.css';

const Home = () => {
  // const PrintQuotes = QuotesHome();

  return (
    <>
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
            <h1>Children's Art Classes </h1>{' '}
          </div>
          <div className="home-images-row">
            <div className="home-image-column">
              <img src={paintBrush} alt="paintBrushes" />
            </div>
          </div>

          <div className="headpaint">
            <div id="class_details1">
              <p className="ages_home">
                {' '}
                Stella's Fine-Art now teaching
                <p className="ages_home">
                  Children's Art Classes ages 8 - 14 years.
                </p>
              </p>

              <p>
                For more information click{' '}
                <em>
                  <Link to="/classes" className="enquire_now">
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
          <div className="new_painting_title">
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
            <div className="effie-image-column">
              <img src={Effieimage2} alt="painting" loading="lazy" />

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
    </>
  );
};

export default Home;
