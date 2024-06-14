import React, { useState } from "react";
import bgImage from "../../assets/bg.png";
import service3 from "../../assets/service3.jpeg";
import { Link, NavLink } from "react-router-dom";


export default function ClientService() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/patients/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Response from API:', responseData);
      setSubmitted(true); // Set submitted to true on successful response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-3 mx-auto flex flex-wrap gap-14 h-1/3">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center pt-6 w-full h-3/4"
              src={service3}
            />
          </div>
          <div className=" w-1/3 bg-opacity-50 rounded-lg p-8 flex flex-col h-3/4">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-teal-900 rounded border border-gray-600 focus:border-teal-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="age" className="leading-7 text-sm text-black">
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  onChange={handleChange}
                  value={formData.age}
                  className="w-full text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-teal-900 rounded border border-teal-600 focus:border-teal-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
                Submit
              </button>
              {submitted && <h1 className="font-semibold"> <NavLink
                  to="/assessment"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-teal-300" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-300 lg:p-0`
                  }
                >
                  PLEASE, Go to the ASSESSMENT
                </NavLink></h1>}
            </form>

          </div>
        
        </div>
      </section>
    </div>
  );
}
