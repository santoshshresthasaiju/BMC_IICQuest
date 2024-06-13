

import bgImage from '../../assets/bg.png';
import serimg from '../../assets/appo.png';

import React, { useState } from 'react';
import axiosInstance from './axiosConfig';  // Adjust path as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/contact/', formData);
      console.log('Form submitted successfully', response.data);
      setFormData({ email: '', message: '' });
      setError(null); // Reset any previous errors
    } catch (error) {
      console.error('Error submitting the form', error);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <section className="text-gray-600 body-font flex relative p-20 h-1/2">
      <div className="lg:w-1/2 w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden">
                 <img
              alt="feature"
              className="object-cover object-center pt-6 h-3/4"
              src={serimg}
            />
          </div>
          <div className=" bg-white rounded-lg p-16 flex flex-col w-1/2 mt-15 md:mt-0 relative z-10 shadow-teal-900 shadow-2xl">
        
            <h2 className="text-gray-900 text-lg mb-1  title-font font-semibold">Contact</h2>
            <form onSubmit={handleSubmit} className="w-full h-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 w-full text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-teal-50 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="leading-7 w-full text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-teal-50  rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <button type="submit" className="text-white mt-5 bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
                Submit
              </button>
            </form>
          </div>
      
      </section>
    </div>
  );
};

export default ContactForm;