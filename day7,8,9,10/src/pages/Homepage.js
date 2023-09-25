import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/cerosel4jpeg.jpeg';
import party from '../party.json';
import Lottie from 'lottie-react';
import image3 from '../assets/images/cerosel3.jpg';
import image4 from "../assets/images/cerosel1.jpeg";
import "../assets/css/homepage.css";
import gif from '../assets/images/balloons.gif';
import wedd from '../assets/images/WWeding.jpeg';
import music from "../assets/images/music.jpg";
import day from "../assets/images/day.jpeg";



function HomePage() {
  const imageUrls = [
    image1,
    image3,
    image4,
    // Add more images as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(imageChangeInterval);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="navbar-name"><i><h3>DreamMaker</h3></i></span>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sliding-image-container">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="image-text">
              {/* Customize your text here */}
              <h2 className='poppins'>We celebrate <span className='span-text'>your moments</span></h2>
             
            </div>
          </div>
        ))}
      </div>

      <div className='welcomenote'>
        <div className='half'>
          <div className='half-content'>
            {/* Left Half Content */}
          </div>
        </div>
        <div className='half'>
          {/* Right Half Content */}
          <p className='stylefont'>
            <img src={gif} width="100" style={{ marginBottom: '-120px' }} />
            <Lottie
              animationData={party}
              style={{ width: '500px', height: '150px' }}
            />
            <p className='stylefont'>Celebrations such as weddings can be very overwhelming, especially when you have to plan events with guests attending from different parts of the world. If you are clueless about where to begin and the right steps to take, our professional team of experienced wedding planners will assist you every step of the way. Our award-winning team in the India has been in the wedding planning business for over a decade which also includes destination wedding planning. Dream maker is one of the most renowned and prestigious wedding planners in the India. The highly experienced team of wedding planners is skilled and trained to handle all aspects of the wedding in a seamless and efficient manner.</p>

          </p>
        </div>
      </div>
      <hr className='black-line' />
      <div className='event1'>

      </div>
      <div className='event2'>
        <figure>
          <img width="100%" src={wedd} alt="Event 2" />
        </figure>
        <div>
          <h2 className='x'>Wedding Event</h2>
          <p className='f1'>
            A wedding is a deeply significant and joyous celebration that marks the union of two individuals in love, commitment, and partnership. It represents a lifelong promise and the beginning of a new chapter in the lives of the bride and groom. Weddings come in various forms, reflecting diverse cultures, traditions, and personal preferences, but they all share common themes of love, unity, and the gathering of family and friends. Typically, weddings involve a beautiful ceremony where vows are exchanged, symbolizing the couple's dedication to one another.
          </p>
          <Link to="/wedding" className='weddingbutton'><button>Book</button></Link>
        </div>

      </div>
      <div className='event3'>
        <div>
          <h2 className='y'>DJ Celebrations</h2>

          <p className='f2'>

            DJ music is an electrifying and transformative experience that transcends boundaries and brings people together on the dance floor. It's more than just music; it's a heartbeat that sets the rhythm for unforgettable moments. With the power to turn an ordinary gathering into an extraordinary celebration, a skilled DJ crafts a sonic journey that resonates with diverse tastes and preferences. From the pulsating beats that ignite the dance floor to the soulful melodies that touch hearts, DJ music is a universal language that evokes emotions and creates lasting memories. DJ music invites you to lose yourself in the rhythm, celebrate life, and embrace the magic of the moment, making it an essential element of any event seeking to create an unforgettable experience.

          </p>
          <Link to="/wedding" className='djbutton'><button>Book</button></Link>
        </div>

        <figure>
          <img width="100%" src={music} alt="Event 3" />
        </figure>


      </div>
      <div className='event4'>
        <figure>
          <img width="100%" src={day} alt="Event 4" />
        </figure>
        <div>
          <h2 className='z'>Birthday parties</h2>
          <p className='f3'>
            Birthday celebrations hold a special place in our lives, serving as annual milestones that mark our journey through time. These occasions are more than just parties; they are cherished moments to reflect on the past, embrace the present, and anticipate the future. Birthdays offer a precious opportunity to gather with loved ones, strengthening bonds and creating lasting memories. They remind us of the value of life, the significance of our existence, and the accomplishments we've achieved. Whether it's a quiet, intimate gathering or a grand, extravagant affair, birthdays allow us to feel loved, appreciated, and celebrated. They inspire hope, joy, and gratitude, acting as a yearly reset button for our souls. In a fast-paced world, birthday celebrations encourage us to pause, connect, and relish the simple pleasures of life.
          </p>
          <Link to="/wedding" className='weddingbutton'><button>Book</button></Link>

        </div>

      </div>
      <h2 className='poppinns'>Our Destination Weddings<span className='exclamatory'>!</span></h2>
      <div className='destination'>

      </div>
      <h2 className='poppinns'>Our partners</h2>
      <div className='partners'>

      </div>
     
    </div>

  );
}

export default HomePage;
