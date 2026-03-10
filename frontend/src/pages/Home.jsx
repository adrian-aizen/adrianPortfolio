import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-6"
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Adrian 👋
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-6">
        I'm a Full Stack Developer passionate about building web applications
        using React, Node.js, and modern technologies.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}