import React, { useState } from "react";
import bgImage from "../../assets/bg.png";
import Assessment from "../Assessment/Assessment";

import service3 from "../../assets/service3.jpeg";

// import Parallal from "../../components/Parallal/Parallal";

export default function ClientService() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  
  const  handleSubmit= (event)=>{

    event.preventDefault();
    setSubmitted(!submitted);

  }

  console.log(name)
  console.log(age)
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
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
                  htmlFor="full-name"
                  className="leading-7 text-sm text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-teal-900 rounded border border-gray-600 focus:border-teal-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Age
                </label>
                <input
                  type="text"
                  id="text"
                  name="text"               
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  className="w-full text-black bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-teal-900 rounded border border-teal-600 focus:border-teal-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
                Sumbmit
              </button>
            </form>
          </div>
        </div>
      </section>

    {submitted && <Assessment />}
    </div>
  );
}
