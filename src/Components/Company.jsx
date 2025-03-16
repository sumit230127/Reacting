import React from 'react';

const CompanyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with background */}
      <div className="bg-blue-600 text-white py-24 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Sitesence Company</h1>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-white"></div>
          </div>
        </div>
        {/* Abstract shape overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,150 L500,0 L500,150 Z" fill="white"></path>
          </svg>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Sitesence, our mission is to empower businesses with innovative digital solutions that drive growth and success in the digital landscape.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to delivering excellence through cutting-edge technology, creative strategies, and personalized service that exceeds our clients' expectations.
              </p>
              <p className="text-gray-600">
                Our team of experts is dedicated to helping businesses of all sizes transform their digital presence and achieve their goals.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-xl overflow-hidden w-full max-w-md">
                <img src="/api/placeholder/600/400" alt="Team collaboration" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Excellence</h3>
              <p className="text-gray-600 text-center">
                We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Collaboration</h3>
              <p className="text-gray-600 text-center">
                We believe in working closely with our clients, fostering transparent communication and partnerships.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Innovation</h3>
              <p className="text-gray-600 text-center">
                We embrace the latest technologies and creative approaches to solve complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Meet the talented professionals behind Sitesence who work tirelessly to bring your digital vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img src="/api/placeholder/400/400" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years of experience in digital marketing and web development, Alex leads our team with vision and expertise.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img src="/api/placeholder/400/400" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
                <p className="text-blue-600 mb-3">Lead Developer</p>
                <p className="text-gray-600">
                  Sarah is an expert in front-end and back-end development, creating seamless digital experiences for our clients.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img src="/api/placeholder/400/400" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Torres</h3>
                <p className="text-blue-600 mb-3">Creative Director</p>
                <p className="text-gray-600">
                  Michael brings creative vision and design expertise to every project, ensuring stunning visual presentations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Sitesence to elevate your business with cutting-edge digital solutions.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );

  <div className="w-full bg-sky-500 py-8 px-4 text-center">
  <h1 className="text-4xl font-bold text-white mb-2">Get in touch</h1>
  <p className="text-white text-lg mb-8">Thank You for showing interest in our services. Here's how you can reach us...</p>
  
  <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
    {/* We're Here Card */}
    <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-80 flex flex-col items-center">
      <h2 className="text-sky-500 text-2xl font-bold mb-4">WE'RE HERE</h2>
      
      <div className="flex items-center mb-3">
        <span className="mr-2">📧</span>
        <a href="mailto:info@wishgeekstechserve.com" className="text-gray-800 hover:text-sky-600">info@wishgeekstechserve.com</a>
      </div>
      
      <div className="grid grid-cols-1 gap-2 w-full">
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt="India flag" className="mr-2 rounded-full" />
          <span className="text-gray-800">+918009006321</span>
        </div>
        
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt="Bangladesh flag" className="mr-2 rounded-full" />
          <span className="text-gray-800">+8801995390933</span>
        </div>
        
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt="UK flag" className="mr-2 rounded-full" />
          <span className="text-gray-800">+448007074800</span>
        </div>
        
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt="Canada flag" className="mr-2 rounded-full" />
          <span className="text-gray-800">+18887081786</span>
        </div>
        
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt="Australia flag" className="mr-2 rounded-full" />
          <span className="text-gray-800">+611800003812</span>
        </div>
        
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt="US flag" className="mr-2 rounded-full" />
          <span className="text-gray-800">+18887081786</span>
        </div>
      </div>
    </div>
    
    {/* Contact Support Card */}
    <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-80 flex flex-col items-center">
      <div className="mb-4">
        <img src="/api/placeholder/120/120" alt="Customer support" className="mx-auto" />
      </div>
      <h2 className="text-gray-800 text-xl font-bold mb-4">CONTACT SUPPORT</h2>
      <button className="bg-white text-sky-500 border border-sky-500 hover:bg-sky-100 px-6 py-2 rounded-full">
        GET SUPPORT
      </button>
    </div>
    
    {/* Our Address Card */}
    <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-80 flex flex-col items-center">
      <div className="mb-4">
        <div className="relative">
          <img src="/api/placeholder/120/120" alt="Map" className="mx-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <MapPin size={40} color="red" />
          </div>
        </div>
      </div>
      <h2 className="text-gray-800 text-xl font-bold mb-2">OUR ADDRESS</h2>
      <p className="text-gray-800">Sector-62, Noida, Uttar Pradesh</p>
    </div>
  </div>
</div>
  
};

export default CompanyPage;