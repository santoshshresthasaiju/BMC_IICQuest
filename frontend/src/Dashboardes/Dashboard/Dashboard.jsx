import React from "react";
import { Link, NavLink } from "react-router-dom";
import bgImage from '../../assets/bg.png'


export default function Dashboard() {
  const handleLogout = () => {
    window.location.to = "/login"; // Redirect to login page
  };
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dashboard </title>
      {/* Include Tailwind CSS */}
      <link
        to="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 text-gray-100" style={{ backgroundImage: `url(${bgImage})`}}>
          <div className="p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <ul className="mt-4">
              <li className="py-2">
              <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-teal-300" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-300 lg:p-0`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-teal-300" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-300 lg:p-0`
                  }
                >
                  SERVICES
                </NavLink>
              </li>
             
              <li className="py-2">
              <NavLink
                  to="/setting"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-teal-300" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-300 lg:p-0`
                  }
                >
                  SETTING
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  to="/"
                  onClick={handleLogout}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-teal-300" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-teal-300 lg:p-0`
                  }
                >
                  LOGOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Content Area */}
        <div className="flex-1 p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Card 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Card 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Card 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
