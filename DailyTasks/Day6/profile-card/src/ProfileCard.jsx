import React from "react";

export default function ProfileCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-80 p-6 text-center">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-md -mt-16"
        />

        {/* Name & Role */}
        <h2 className="text-xl font-bold mt-4">Rahul Sharma</h2>
        <p className="text-gray-500 text-sm">Full Stack Developer</p>

        {/* Bio */}
        <p className="text-gray-600 text-sm mt-3">
          Passionate developer with experience in building web apps using
          React, Node.js, and Tailwind CSS. Loves clean UI and open-source.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:rahul@example.com" className="text-gray-600 hover:text-red-500">📧</a>
          <a href="https://github.com/username" target="_blank" className="text-gray-600 hover:text-black">💻</a>
          <a href="https://linkedin.com/in/username" target="_blank" className="text-gray-600 hover:text-blue-600">🔗</a>
        </div>

        {/* Button */}
        <button className="mt-5 w-full py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600">
          Contact
        </button>
      </div>
    </div>
  );
}
