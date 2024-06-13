import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg.png';
import login from '../../assets/loginForm.png';


export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError('');
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        // Store token securely in HttpOnly cookie
        document.cookie = `token=${responseData.token}; Secure; HttpOnly; SameSite=Strict`;
        alert('Login successful');
        navigate('/dashboard');
      } else if (response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <section className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pt-10  flex flex-col justify-center items-center">
            <h1 className="title-font font-bold text-3xl text-gray-900">
              Welcome To LOGIN Page!
            </h1>
            <p className="leading-relaxed mt-4">
              Please enter your credentials to log in.
            </p>
          </div>
        <div className="container px-10 mx-16 flex gap-16">
          <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 h-1/2 ">
            <div className="bg-white rounded-lg p-8 flex flex-col w-full mt-10 shadow-2xl shadow-teal-800">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Login
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="username"
                  className="leading-7 text-sm text-gray-600  "
                >
                  Username
                </label>
                <input
                  {...register("username", { required: "Username is required" })}
                  type="text"
                  id="username"
                  name="username"
                  className="w-full bg-teal-50  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.username && <span className="text-red-600">{errors.username.message}</span>}
              </div>
              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600 ">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required"
                  })}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-teal-50  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <input type="submit" className="text-white bg-teal-500 border-0 py-2 px-6 my-8 focus:outline-none hover:bg-teal-600 rounded text-lg" />
              <p className="text-xs text-gray-500 mt-3">
                Don't have an account? Sign up now!
              </p>
            </div>
          </form>
          <div className="lg:w-1/2 w-auto mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center pt-6 w-full"
              src={login}
            />
          </div>
        </div>
      </section>
    </>
  );
}
