import React from 'react'
import { Link } from 'react-router-dom';
import home1 from '../../assets/home1.png';
import bgImage from '../../assets/bg.png';
import Service from '../../components/Services/Services';
import Chatbox from '../../Chatbox/Chatbox';
import Content from '../../components/Content/Content';

export default function Home() {
    return (
        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }} >
        <div className="mx-auto w-full max-w-7xl ">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 h-svh">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            MINI - MENTAL STATE EXAMINATION
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-teal-300 rounded-lg hover:opacity-75"
                            to="/"
                        >
                           
                            &nbsp; About Us
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 ">
                    <img className="w-1/2" src={home1} alt="image1" />
                </div>
            </aside>

            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl ont-medium title-font mb-2 text-gray-900 font-extrabold  text-8xl">Let's Talk Let's Heal</h1>
        <div class="h-1 w-20 bg-teal-500 rounded"></div>
      </div>

            <div className="grid  place-items-center sm:mt-20">
                <Content />
            </div>

        </div>
        <Service />
        <Chatbox/>
        </div>
            
       
    );
}
