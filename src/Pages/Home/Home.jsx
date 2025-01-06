import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AllProducts from "../../Components/AllProducts/AllProducts";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Whyimg1 from "../../Images/why-img1.png";
import Whyimg2 from "../../Images/why-img2.png";
import Whyimg3 from "../../Images/why-img3.png";
import Agriculture from "../../Images/agrepro.png";
import Freshveg from "../../Images/vegess01.png";
import Dairy from "../../Images/dairpro.png";
// import Meat from "../../Images/meet.png";
import Vegtable from "../../Images/food01.webp";
import Leftline from "../../Images/textr.png";
import Rightline from "../../Images/textr2.png";
import Explore1 from "../../Images/soilimg.png";
import Explore2 from "../../Images/projects02.jpeg";
import Explore3 from "../../Images/frams.webp";
import Invest1 from "../../Images/invest01.webp";
import Invest2 from "../../Images/invest02.webp";
import Invest3 from "../../Images/invest04.webp";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const slides = [
    {
      title: "LET'S TEST OUR DAIRY!",
      subtitle: "Organic & Fresh Dairy Products",
      backgroundImage: "/Image/banner-img02.webp",
      leftDecor: "/Image/cheese.png", // cheese image
      rightDecor: "/Image/milk01.png", // milk and eggs image
    },
    {
      title: "WELCOME TO OUR FARM",
      subtitle: "Organic Food From The Ground To You",
      backgroundImage: "/Image/banner-img01.webp",
      leftDecor: "/Image/banner-almond.png", // almonds image
      rightDecor: "/Image/banner01-cherry.png", // strawberries image
    },
  ];

  const statsData = [
    {
      id: 1,
      number: "1,5500",
      label: "Tons of harvesta",
      icon: "/Image/1290555.png",
    },
    {
      id: 2,
      number: "250",
      label: "Units of Cattle",
      icon: "/Image/2395796.png",
    },
    {
      id: 3,
      number: "2,500",
      label: "Happy Clients",
      icon: "/Image/5455723.png",
    },
    {
      id: 4,
      number: "200",
      label: "Expert Farmar",
      icon: "/Image/3319221.png",
    },
  ];

  useEffect(() => {
    // Set up automatic sliding every 5 seconds
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Show content 1 second after the slide changes
    setShowContent(false);
    const timer = setTimeout(() => setShowContent(true), 1000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
 
  return (
    <div>
      <div className="ec-farm-slider">
        <div
          className="ec-slides-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="ec-slide">
              <div
                className="ec-slide-content"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slide.backgroundImage})`,
                }}
              >
                <div
                  className={`ec-text-content ${showContent ? "ec-show" : ""}`}
                >
                  <div className="ec-welcome-text">{slide.title}</div>
                  <h1 className="ec-main-heading">{slide.subtitle}</h1>
                  <Link
                    to="/Products"
                    className="ec-shop-button ec-no-underline"
                  >
                    Shop Now
                    <ShoppingCart className="ec-cart-icon" />
                  </Link>
                </div>

                <div
                  className={`ec-decor-images ${showContent ? "ec-show" : ""}`}
                >
                  <img src={slide.leftDecor} alt="Left decoration" />
                  <img src={slide.rightDecor} alt="Right decoration" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ec-navigation">
          <div className="ec-dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`ec-dot ${
                  currentSlide === index ? "ec-active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <section className="ec-organic-industry">
        <div className="ec-organic-industry__container">
          <h3>Why Us</h3>
          <h1 className="ec-organic-industry__title">
            The Future Of The Organic Industry Is Our Priority
          </h1>

          <div className="ec-organic-industry__cards">
            <div className="ec-industry-card">
              <div className="ec-industry-card__image-wrapper">
                <img
                  src={Whyimg1}
                  alt="Modern greenhouse with plants"
                  className="ec-industry-card__image"
                />
              </div>
              <h3 className="ec-industry-card__title">
                Modern Farming Equipment
              </h3>
            </div>

            <div className="ec-industry-card">
              <div className="ec-industry-card__image-wrapper">
                <img
                  src={Whyimg2}
                  alt="Person harvesting fresh berries"
                  className="ec-industry-card__image"
                />
              </div>
              <h3 className="ec-industry-card__title">
                Organic & Fresh Harvesting
              </h3>
            </div>

            <div className="ec-industry-card">
              <div className="ec-industry-card__image-wrapper">
                <img
                  src={Whyimg3}
                  alt="Fresh produce delivery"
                  className="ec-industry-card__image"
                />
              </div>
              <h3 className="ec-industry-card__title">
                Quick & Freshly Deliverd
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="ec-about">
        <div className="ec-about-heading">
          <div className="ec-about-heading-left">
            <h3>About Us</h3>
            <h1 className="ec-organic-industry__title">
              An Organic Farm With<br></br> A Big Mission Behind
            </h1>
            <Link to="/About" className="ec-shop-button ec-no-underline">
              About More
              <FaArrowRightLong className="ec-cart-icon" />
            </Link>
          </div>
          <div className="ec-about-heading-right">
            <p className="ec-about-right-para">
              To create a sustainable and prosperous future by revolutionizing
              agriculture through innovative practices, focusing on water
              conservation, tree plantation, organic farming, and empowering the
              next generation of farmers
            </p>
          </div>
        </div>
        <div className="ec-stats-section">
          <div className="ec-stats-container">
            <div className="ec-stats-grid">
              {statsData.map((stat) => (
                <div key={stat.id} className="ec-stats-card">
                  <div className="ec-stats-icon-wrapper">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="ec-stats-icon"
                    />
                  </div>
                  <div className="ec-stats-content">
                    <div className="ec-stats-number">{stat.number}</div>
                    <div className="ec-stats-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ec-imgu-vegitable">
          <div className="ec-textr-div">
            <img alt="sir" src={Leftline} />
          </div>
          <div className="ec-textr-div2">
            <img alt="sir" src={Rightline} />
          </div>
          <figure className="ec-vegtable">
            <img alt="btn" src={Vegtable} />
          </figure>
        </div>
      </section>
      <section className="ec-organic-industry ec-services">
        <div className="ec-organic-industry__container">
          <h3>WHAT WE’RE DOING</h3>
          <h1 className="ec-organic-industry__title">that Services We Offer</h1>

          <div className="ec-flex">
            <div className="ec-industry-card">
              <div className="ec-industry-card__image-wrapper">
                <img
                  src={Agriculture}
                  alt="Modern greenhouse with plants"
                  className="ec-industry-card__image"
                />
              </div>
              <h3 className="ec-industry-card__title">Agriculture Products</h3>
            </div>
            <div className="ec-industry-card">
              <div className="ec-industry-card__image-wrapper">
                <img
                  src={Freshveg}
                  alt="Modern greenhouse with plants"
                  className="ec-industry-card__image"
                />
              </div>
              <h3 className="ec-industry-card__title">Fresh Vegetables</h3>
            </div>

            <div className="ec-industry-card">
              <div className="ec-industry-card__image-wrapper">
                <img
                  src={Dairy}
                  alt="Person harvesting fresh berries"
                  className="ec-industry-card__image"
                />
              </div>
              <h3 className="ec-industry-card__title">Dairy Products</h3>
            </div>

            {/* <div className="ec-industry-card">
              <div className="ec-industry-card__image-wrapper">
                <img
                  src={Meat}
                  alt="Fresh produce delivery"
                  className="ec-industry-card__image"
                />
              </div>
              <h3 className="ec-industry-card__title">Organic Meat</h3>
            </div> */}
          </div>
        </div>
      </section>
      <section className="ec-all-products">
        <AllProducts />
        <div className="ec-my-flex">
          <Link to="/Products" className="ec-btn-more ec-no-underline">
            See More
          </Link>
        </div>
      </section>
      <div className="ec-projects">
        <div className="ec-projects-container">
          <div className="ec-projects-header">
            <span>PROJECTS</span>
            <h2>Explore Our Projects</h2>
          </div>

          <div className="ec-projects-grid">
            <div className="ec-project-card">
              <div className="ec-project-img">
                <img src={Explore1} alt="Climate Initiative" />
                <span>Farming Practices</span>
              </div>
              <h3>Climate and Soil Health Initiative</h3>
              <Link to="#">Read More</Link>
            </div>

            <div className="ec-project-card">
              <div className="ec-project-img">
                <img src={Explore2} alt="Agricultural Network" />
                <span>Farming Practices</span>
              </div>
              <h3>National Agricultural Land Network</h3>
              <Link to="#">Read More</Link>
            </div>

            <div className="ec-project-card">
              <div className="ec-project-img">
                <img src={Explore3} alt="Farmers Partnering" />
                <span>Farming Practices</span>
              </div>
              <h3>Landowners and Farmers Partnering</h3>
              <Link to="#">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ec-invest">
        <div className="ec-invest-container">
          <div className="ec-invest-header">
            <span>OPPORTUNITY</span>
            <h2>Invest On Your Convenience</h2>
          </div>

          <div className="ec-invest-grid">
            <div className="ec-invest-card">
              <div className="ec-invest-img">
                <img src={Invest1} alt="Short Term Investment" />
              </div>
              <h3>Short Term Investment</h3>
              <p>
                Short term investments on daily/weekly basis to fund what is
                useful for all.
              </p>
              <button>Become A Investor</button>
            </div>

            <div className="ec-invest-card">
              <div className="ec-invest-img">
                <img src={Invest2} alt="Long Term Investment" />
              </div>
              <h3>Long Term Investment</h3>
              <p>
                Long term investments with better returns to fund what is useful
                for all.
              </p>
              <button>Become A Investor</button>
            </div>

            <div className="ec-invest-card">
              <div className="ec-invest-img">
                <img src={Invest3} alt="Social Impact Investment" />
              </div>
              <h3>Social Impact Investment</h3>
              <p>
                Social impact investments to help fund what is useful for all.
              </p>
              <button>Become A Investor</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ec-testimonials">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
