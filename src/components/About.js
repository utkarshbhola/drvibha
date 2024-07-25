import React from 'react';
import './About.css'; // Ensure the CSS file exists and is correctly named

const About = () => {
  const backgroundImage = ''; 
  return (
    <section className="about-section py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="drvibha\src\Assets\img.jpg"
              alt="About 1"
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3">Who Are We?</h2>
                <p className="lead fs-4 text-secondary mb-3">
                Meet Dr. Vibha, a seasoned homoeopathic physician and esteemed health coach, spearheading the renowned ASHOK HOMOEOPATHIC CLINIC.
                </p>
                <p className="mb-5">
                With a wealth of over a decade in practice, Dr. Vibha has tenderly cared for a vast clientele, exceeding 5000 patients, nurturing health and vitality. At ASHOK HOMOEOPATHIC CLINIC, the ethos of holistic healing transcends boundaries, offering comprehensive health solutions both online and offline
                </p>
                <p className="mb-5">
                Embracing innovation, Dr. Vibha ensures convenience by dispatching medicines to doorsteps across India and abroad. Driven by a passion for wellbeing, Dr. Vibha embodies expertise, empathy, and a steadfast commitment to empowering individuals on their journey to optimal health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
