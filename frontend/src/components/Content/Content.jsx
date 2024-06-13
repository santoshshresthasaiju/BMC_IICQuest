import React from 'react'
import bgImage from '../../assets/bg.png';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';
import step4 from '../../assets/step4.png';


export default function Content() {
  return (
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }} ><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-teal-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={step1} alt="content" />
            <h3 className="tracking-widest text-teal-500 text-lxs font-bold title-font">Step 1</h3>
            <p className="text-lg text-gray-900  title-font mb-4">
            Clinician selects an assessment from MMSE’s library</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-teal-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={step2} alt="content" />
            <h3 className="tracking-widest text-teal-500 text-lxs font-bold title-font">Step 2</h3>
            <p className="text-lg text-gray-900  title-font mb-4">Client takes assessment via iPad or their own smartphone</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-teal-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={step3} alt="content" />
            <h3 className="tracking-widest text-teal-500 text-lxs font-bold title-font">Step 3</h3>
            <p className="text-lg text-gray-900 font-medium title-font mb-4">Results are instantly scored and interpreted</p>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-teal-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={step4} alt="content" />
            <h3 className="tracking-widest text-teal-500 text-lxs font-bold title-font">Step 4</h3>
            <p className="text-lg text-gray-900 font-medium title-font mb-4">Clinician uses scores to track symptoms and provide feedback</p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
