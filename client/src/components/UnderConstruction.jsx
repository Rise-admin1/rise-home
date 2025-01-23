import React from 'react';
import { Wrench, Code } from 'lucide-react';

const AppBuildProgress = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md rounded-xl bg-gray-900 p-8 shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <Wrench className="text-blue-500 w-16 h-16 animate-spin" />
          <Code className="text-green-500 w-16 h-16 ml-4" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white">App Under Construction</h2>
        <p className="text-gray-400 mb-6">
          Our development team is actively building something amazing. 
          Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default AppBuildProgress;