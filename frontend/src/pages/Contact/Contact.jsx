import React from 'react'
import bgImage from '../../assets/bg.png';
import serimg from '../../assets/appo.png';


export default function Contact(){

  return (
    <div >
      <section className="text-black-600 body-font relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
  <div className="container px-10 py-5 mr-auto flex">
  <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center pt-6 w-full h-3/4"
              src={serimg}
            />
          </div>
    <div className="lg:w-1/3 md:w-1/2 h-1/2 bg-white rounded-lg p-8  flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-2xl shadow-teal-800">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-teal-50 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="bg-teal-50  w-full rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
    </div>
  )
}
