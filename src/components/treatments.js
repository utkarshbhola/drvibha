import React from 'react';

const Treatments = () => {
  return (
    <section className="treatments-section py-5">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Treatments</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Treatment Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Chronic Diseases</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive treatment plans for chronic ailments.
              </p>
              <ul className="list-disc pl-5">
                <li>Customized treatment protocols</li>
                <li>Long-term management strategies</li>
                <li>Personalized care approach</li>
              </ul>
            </div>

            {/* Treatment Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Acute Conditions</h3>
              <p className="text-gray-700 mb-4">
                Immediate relief and management of acute illnesses.
              </p>
              <ul className="list-disc pl-5">
                <li>Rapid symptom relief</li>
                <li>Short-term treatment plans</li>
                <li>Emergency care availability</li>
              </ul>
            </div>

            {/* Treatment Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Pediatric Care</h3>
              <p className="text-gray-700 mb-4">
                Specialized treatments for children’s health issues.
              </p>
              <ul className="list-disc pl-5">
                <li>Gentle and safe therapies</li>
                <li>Child-friendly consultations</li>
                <li>Developmental assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
