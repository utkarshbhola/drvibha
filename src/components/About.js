import React from 'react';
import vibha from '../Assets/vibha.jpeg';

const About = () => {
  return (
    <section className="about-section py-3 py-md-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-6/12 xl:w-5/12 mb-4 md:mb-0">
            <img
              className="rounded-lg shadow-md"
              loading="lazy"
              src={vibha}
              alt="About Dr. Vibha"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-6/12 xl:w-7/12">
            <div className="mx-auto max-w-lg xl:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Who Are We?</h2>
              <p className="text-lg text-gray-700 mb-3 leading-relaxed">
                Meet Dr. Vibha, a seasoned homoeopathic physician and esteemed health coach, spearheading the renowned ASHOK HOMOEOPATHIC CLINIC.
              </p>
              <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                With a wealth of over a decade in practice, Dr. Vibha has tenderly cared for a vast clientele, exceeding 5000 patients, nurturing health and vitality. At ASHOK HOMOEOPATHIC CLINIC, the ethos of holistic healing transcends boundaries, offering comprehensive health solutions both online and offline.
              </p>
              <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                Embracing innovation, Dr. Vibha ensures convenience by dispatching medicines to doorsteps across India and abroad. Driven by a passion for wellbeing, Dr. Vibha embodies expertise, empathy, and a steadfast commitment to empowering individuals on their journey to optimal health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
