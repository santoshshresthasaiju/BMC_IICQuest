import React from 'react'

import Cover from '../../assets/cover.jpg'
import OurTea from '../OurTeam/OurTeam';
import bgImage from '../../assets/bg.png';

export default function About() {
  return (
      <div className="py-16 bg-white bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }} >
          <div className="container m-auto px-6 py-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src={Cover}
                          alt="image"
                      />
                  </div>
                  <div className="md:6/12 lg:w-6/12">
                     
                      <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
                          Our Mission
                      </h2>
                      <p className="mt-6 text-gray-600">
                      At MMSE, our mission is to revolutionize cognitive assessment
                       by leveraging cutting-edge technology to provide accessible, reliable, and user-friendly 
                       solutions for healthcare professionals. We are dedicated to enhancing the efficiency and
                        accuracy of the Mini Mental State Examination (MMSE) through our innovative web-based application.
                      </p>
                     
                      <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
                      Who we are
                      </h2>
                      <p className="mt-4 text-gray-600">
                       We are a team of passionate professionals from diverse fields, including healthcare, technology, and design,
                       united by a common goal: to improve the quality of mental health assessments. Our team comprises experienced
                        developers, skilled UI/UX designers, and knowledgeable healthcare consultants who work collaboratively to create a 
                        seamless and effective tool for cognitive screening.
                      </p>

                  </div>
              </div>
          </div>
          <OurTea/>
          
      </div>
  );
}