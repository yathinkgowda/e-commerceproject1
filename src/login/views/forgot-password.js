import React from "react";

import './login.css';


const ForgotPassword = () => {
  const handleSubmit = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;


    const res = await fetch('http://localhost:3000/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
  });
    // Handle form submission logic here, e.g., API call
    console.log("Submitted email:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email Adress
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your registered email"
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </form>
        <div className="mt-4 text-center">
          Remembered your password?{" "}
          <a href="/loginpage" className="text-blue-500 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
