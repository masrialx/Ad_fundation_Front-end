import React from 'react';
import './Intro.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Intro() {
  return (
    <div className="intro-container">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Our Donation Services</h1>
        <p className="lead">Making a difference, one donation at a time.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="goals-section section"   data-aos="fade-down">
              <h2>Our Goals</h2>
              <ul>
                <li>Provide support to those in need</li>
                <li>Promote education and healthcare</li>
                <li>Enhance community development</li>
                <li>Ensure transparency and accountability in all our activities</li>
              </ul>
            </div  >
          </div>
          <div className="col-md-4"     data-aos="fade-up">
            <div className="creativity-section section">
              <h2>Our Creativity</h2>
              <p>At our organization, we believe in innovative solutions to tackle the challenges our communities face. Our creative approach includes:</p>
              <ul>
                <li>Using technology to reach more donors and beneficiaries</li>
                <li>Organizing community events and workshops</li>
                <li>Collaborating with local and international partners</li>
                <li>Creating awareness through social media and campaigns</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4"     data-aos="fade-down">
            <div className="services-section section">
              <h2>Our Services</h2>
              <p>We offer a range of donation services to support various causes:</p>
              <ul>
                <li>Monetary Donations</li>
                <li>Food and Clothing Drives</li>
                <li>Medical Supply Donations</li>
                <li>Volunteer Opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Intro;
