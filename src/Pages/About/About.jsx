import React from "react";
import "./About.css";
import { Link} from "react-router-dom";
import About11 from "../../Images/agr.jpg";
import About22 from "../../Images/frams.webp";
 
const About = () => {

  const services = [
    {
      icon: "🌾",
      title: "Agriculture Products",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: "🥬",
      title: "Fresh Vegetables",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: "🥛",
      title: "Dairy Products",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: "🥩",
      title: "Organic Meat",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    }
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
  return (
    <div>
      <div class="ec-contact-section">
        <div class="ec-contact-hero">
          <h1 class="ec-contact-hero-title">About</h1>
          <div class="ec-contact-breadcrumb">
            <Link
              class="ec-no-underline ec-link-clr"
              to="/Home"
              data-discover="true"
            >
              Home |{" "}
            </Link>{" "}
            About
          </div>
        </div>
      </div>
      <section className="ec2-farming-section">
        <div className="ec2-farming-container">
          <div className="ec2-image-group">
            <div className="ec2-farmer-image-wrapper">
              <img
                src={About22}
                alt="Farmer in field"
                className="ec2-farmer-image"
              />
            </div>

            <div className="ec2-field-image-wrapper">
              <img src={About11} alt="Field work" className="ec2-field-image" />
            </div>

            <div className="ec2-experience-box">
              <h3 className="ec2-experience-text">
                25 Years Of
                <br />
                Experience In
                <br />
                Agriculture
                <br />
                Farming
              </h3>
            </div>
          </div>

          <div className="ec2-content-section">
            <div className="ec2-content-header">
              <div className="ec2-label-wrapper">
                <span className="ec2-leaf-icon">🌱</span>
                <span className="ec2-about-label">ABOUT FARMING</span>
              </div>
              <h2 className="ec2-main-title">We're Best In Organic Firming</h2>
              <p className="ec2-subtitle">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem ipsum has been the industry's standard dummy
                text ever since
              </p>
            </div>

            <p className="ec2-description">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem ipsum
            </p>
          </div>
        </div>
      </section>
      <section className="ec2-services-section">
        <div className="ec2-services-container">
          {/* Header Section */}
          <div className="ec2-services-header">
            <div className="ec2-services-title-group">
              <span className="ec2-services-label">
                <span className="ec2-leaf-icon">🌱</span>
                SERVICES
              </span>
              <h2 className="ec2-services-title">
                Providing Best Quality
                <br />
                Organic Products
              </h2>
            </div>
            <Link
              to="/Products"
              className="ec2-shop-now-button ec-no-underline"
            >
              Shop Now <span className="ec2-arrow">→</span>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="ec2-services-grid">
            {services.map((service, index) => (
              <div key={index} className="ec2-service-card">
                <span className="ec2-service-icon">{service.icon}</span>
                <h3 className="ec2-service-title">{service.title}</h3>
                <p className="ec2-service-description">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
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
        </div>
      </section>
    </div>
  );
};

export default About;
