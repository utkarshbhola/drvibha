import React from 'react';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center pt-24 py-12">
      <h1 className="text-4xl font-bold text-yellow-800 mb-8">Testimonials</h1>
      <div className="w-4/5 flex flex-wrap justify-center gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-72">
          <p className="text-gray-800">"My experience with Dr. Vibha Bhola has been nothing short of exceptional. I came to her with severe migraines that were impacting my quality of life. Her holistic approach and customized treatment plan have significantly reduced the frequency and intensity of my headaches. Dr. Bhola's genuine concern for her patients and her commitment to holistic healing make her an outstanding practitioner. If you're looking for a caring and skilled homeopath, Dr. Bhola is the one to see."</p>
          <p className="text-yellow-700 mt-4">- John Doe</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 w-72">
          <p className="text-gray-800">"Dr. Vibha Bhola is a remarkable homeopathic doctor who transformed my approach to health. I was dealing with persistent digestive issues and had almost given up on finding a solution. Her deep knowledge of homeopathy and personalized care not only addressed my symptoms but also improved my overall health. Dr. Bhola's gentle manner and thorough explanations made me feel comfortable and informed throughout the process. I'm grateful for her support and expertise."</p>
          <p className="text-yellow-700 mt-4">- Jane Smith</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 w-72">
          <p className="text-gray-800">"I can't thank Dr. Vibha Bhola enough for her incredible care and expertise. After struggling with chronic allergies for years, I finally found relief through her homeopathic treatments. Dr. Bhola took the time to understand my entire health history and tailored a treatment plan just for me. Her compassionate approach and dedication to my well-being have truly made a difference in my life. I highly recommend her to anyone seeking a holistic and effective approach to health."</p>
          <p className="text-yellow-700 mt-4">- Sarah Johnson</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
