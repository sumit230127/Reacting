import React from 'react';

const Services = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <main className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Real people delivering real results</h1>
        <div className="relative">
          <img src="background-image.jpg" alt="People jumping" className="w-full h-auto opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-bold">Real people delivering real results</div>
          </div>
        </div>
      </main>
      <aside className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-4">
        <div className="flex items-center space-x-2">
          <div className="bg-black rounded-full w-8 h-8"></div>
          <span>Need Help?</span>
        </div>
      </aside>
    </div>
  );
};

export default Services;
