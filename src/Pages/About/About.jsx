import React from "react";
import { Link} from "react-router-dom";
 
const About = () => {
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
    </div>
  );
};

export default About;
