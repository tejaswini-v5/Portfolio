'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Tejaswini Viswanath</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8">
            Full Stack Developer | Problem Solver | AI Engineer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 