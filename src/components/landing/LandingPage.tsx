import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Users, Globe, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Sticky Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">ChatAndBuild</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#community"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Community
                </a>
                <button
                  onClick={handleGetStarted}
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Community Spaces
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10">
            Connect, collaborate, and create with a community of builders and innovators.
            Share your projects and get valuable feedback from peers.
          </p>
          <button
            onClick={handleGetStarted}
            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect with Peers</h3>
            <p className="text-gray-600">
              Join spaces based on your interests and connect with like-minded builders and creators.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Code className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Showcase Projects</h3>
            <p className="text-gray-600">
              Share your work, get feedback, and discover inspiring projects from the community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Grow Together</h3>
            <p className="text-gray-600">
              Learn from others, collaborate on ideas, and build your network in a supportive environment.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div id="community" className="container mx-auto px-4 py-16">
        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join our growing community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Thousands of builders are already sharing ideas, getting feedback, and collaborating on exciting projects.
            </p>
            <button
              onClick={handleGetStarted}
              className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2023 Community Spaces. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
