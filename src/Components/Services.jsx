import React from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";
import img4 from "../Images/img4.jpeg";
import img5 from "../Images/img5.jpeg";
import img6 from "../Images/img6.jpeg";
import heroImage from "../Images/Hero-image.jpeg";
import googlePartner from "../Images/Google-partener.jpeg";
import MetaLogo from "../Images/MetaLogo.jpeg";
import amazonAds from "../Images/amazon-ads.png";
import hubspot from "../Images/hubspot.png";
import websitebuildingvideo from "../Images/websitebuildingvideo.mp4";
import Whychooseus from "../Images/Whychooseus.jpeg";
import Webdevelopment from "../Images/webdevelopment.jpeg";
import logo from "../Images/logo.jpeg"; // Replace with actual logo path
import Footer from "../Components/Footer"; // Importing Footer
import SEOANALYSIS from "../Images/SEOANALYSIS.jpeg";

const Service = () => {
  const services = [
    { title: "Android Development", imgSrc: img1 },
    { title: "Web Development", imgSrc: img2 },
    { title: "Database Management", imgSrc: img3 },
    { title: "Business Analytics", imgSrc: img4 },
    { title: "Digital Marketing", imgSrc: img5 },
    { title: "Video Creation", imgSrc: img6 },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 text-black">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center py-20 px-10 md:px-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-6xl font-bold">
            Use the best digital marketing services available to outsmart the competition.
          </h2>
          <p className="text-lg">
            Get more traffic. Acquire more customers. Sell more. We offer proven strategies & reliable execution to exceed your marketing goals.
          </p>
          <div className="flex space-x-4 mt-4">
            <img src={googlePartner} alt="Google Partner" className="h-10" />
            <img src={MetaLogo} alt="Meta Partner" className="h-10" />
            <img src={amazonAds} alt="Amazon Ads" className="h-10" />
            <img src={hubspot} alt="HubSpot" className="h-10" />
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={heroImage} alt="Marketing Analytics" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Services Section */}
      <h1 className="text-center text-4xl font-bold mt-10 mb-10">Our Services</h1>
      <div className="px-10 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src={service.imgSrc} alt={service.title} className="w-full h-60 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col md:flex-row items-center px-10 md:px-20 mt-20">
        {/* Text First */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-5xl font-bold">Why Choose Our Services?</h2>
          <p className="text-lg">
          Choosing our services means choosing excellence, innovation, and a commitment to your satisfaction. Our team of dedicated professionals works tirelessly to ensure that every project we undertake exceeds your expectations. With years of industry experience, state-of-the-art technology, and a customer-centric approach, we are uniquely positioned to provide solutions that are not only effective but also tailored to your specific needs. We pride ourselves on our reliability, transparency, and unwavering dedication to quality. When you choose us, you are choosing a partner who will go above and beyond to help you achieve your goals and drive your success.
          </p>
          <ul className="space-y-2">
            <li>✅ <strong>Proven industry experience</strong></li>
            <li>✅ <strong>Cutting-edge technology and tools</strong></li>
            <li>✅ <strong>100% client satisfaction guarantee</strong></li>
          </ul>
        </div>

        {/* Image Second */}
        <div className="md:w-1/2">
          <img src={Whychooseus} alt="Why Choose Us" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col md:flex-row items-center py-20 px-10 md:px-20">
        <div className="md:w-1/2">
          <video src={websitebuildingvideo} autoPlay muted loop playsInline className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold ml-20">Transform Your Vision into a Stunning Online Reality</h2>
          <p className="text-lg ml-20">
            Your website is your digital storefront. With our creative design and technical expertise, we turn your vision into an engaging and responsive online experience that captivates your audience and drives results.
          </p>
          <div className="flex space-x-4 justify-end mr-20">
            <img src={googlePartner} alt="Google Partner" className="h-10" />
            <img src={MetaLogo} alt="Meta Partner" className="h-10" />
            <img src={amazonAds} alt="Amazon Ads" className="h-10" />
            <img src={hubspot} alt="HubSpot" className="h-10" />
          </div>
        </div>
      </div>

      {/* Website Design Section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-20 px-10 bg-white min-h-[800px]">
  {/* Left Section */}
  <div className="md:w-1/2">
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="w-6 h-6" />
      <a href="your-link-here" className="text-blue-900 font-semibold hover:underline">
        Results-Driven Website Design
      </a>
    </div>
    <div className="text-5xl font-bold mt-6">
      Get a beautiful website that wins customers.
    </div>
    <div className="mt-6 text-lg mr-10">
      Elevate your business with a trusted website that your customers will love. Our award-winning website designers will represent your brand in the best possible way. Your website will load extremely fast and look great on all devices.
    </div>
    <div className="mt-10 flex items-center">
      <div className="text-green-700 text-5xl font-bold">900+</div>
      <div className="ml-3 text-lg">
        Successful websites launched by our team since 2011
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="md:w-1/2 flex justify-end">
    <div className="w-full h-[600px]"> 
      <img 
        src={Webdevelopment} 
        alt="Website Designs" 
        className="w-full h-full object-cover shadow-lg rounded-lg"
      />
    </div>
  </div>
</div>

      <div className="bg-gray-100 py-24 px-6 lg:px-20 flex flex-col lg:flex-row items-center min-h-[600px]">
  {/* Left Side: Progress Bars */}
  <div className="w-full lg:w-1/2 space-y-10">
    {/* SmartSites Performance */}
    <div>
      <p className="text-gray-800 font-semibold text-lg uppercase">SMARTSITES PERFORMANCE</p>
      <div className="relative mt-3 bg-gray-300 rounded-full h-10 w-full">
        <div className="bg-yellow-400 h-10 rounded-full" style={{ width: "99%" }}></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border-4 border-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-black font-semibold text-lg">99%</span>
        </div>
      </div>
    </div>

    {/* BestCompany Overall */}
    <div>
      <p className="text-gray-800 font-semibold text-lg uppercase">BESTCOMPANY™ OVERALL</p>
      <div className="relative mt-3 bg-gray-300 rounded-full h-10 w-full">
        <div className="bg-blue-500 h-10 rounded-full" style={{ width: "83%" }}></div>
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-white border-4 border-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-black font-semibold text-lg">83%</span>
        </div>
      </div>
    </div>

    {/* BestCompany Minimum */}
    <div>
      <p className="text-gray-800 font-semibold text-lg uppercase">BESTCOMPANY™ MINIMUM</p>
      <div className="relative mt-3 bg-gray-300 rounded-full h-10 w-full">
        <div className="bg-gray-600 h-10 rounded-full" style={{ width: "40%" }}></div>
        <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 bg-white border-4 border-gray-600 rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-black font-semibold text-lg">40%</span>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side: Marketing Content */}
  <div className="w-full lg:w-1/2 lg:pl-20 mt-14 lg:mt-0">
    <h4 className="text-blue-700 font-semibold text-xl flex items-center">
      <span className="mr-2">📊</span> Certified Pay-Per-Click Advertising
    </h4>
    <h2 className="text-gray-900 font-bold text-4xl mt-3">
      Improve your ROI with Scalable PPC marketing.
    </h2>
    <p className="text-gray-600 mt-6 text-lg">
      SmartSites is rated in the top 1% of digital marketing agencies.
      Blending performance with exceptional customer service, our PPC
      specialists are some of the best in the industry with a track record
      for growing successful businesses.
    </p>

    {/* Partner Logos */}
    <div className="flex flex-wrap mt-8 space-x-6">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Partner" className="h-16"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_logo_%282012%29.svg" alt="Microsoft Partner" className="h-16"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_logo_%282019%29.svg" alt="Meta Partner" className="h-16"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Partner" className="h-16"/>
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between bg-white p-16 min-h-[700px]">
  {/* Left Section */}
  <div className="md:w-1/2 text-left space-y-8">
    {/* Heading with Icon */}
    <div className="flex items-center gap-4">
      <svg
        className="w-12 h-12 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16l-4-4m0 0l4-4m-4 4h16"
        />
      </svg>
      <h3 className="text-blue-600 font-semibold text-2xl">Proven Organic SEO</h3>
    </div>

    {/* Main Title */}
    <h2 className="text-5xl font-extrabold leading-tight">
      Drive more organic traffic to your website.
    </h2>

    {/* Description */}
    <p className="text-gray-700 text-xl leading-relaxed">
      Get more qualified traffic on the search terms that matter most to your
      business. We achieve measurable results by working on every variable that
      impacts SERPs. Trust our proven track record to maximize your visibility
      online. Set your business up for long-term success.
    </p>

    {/* Statistics */}
    <p className="text-green-700 font-extrabold text-6xl mt-8">
      200% 
      <span className="text-gray-700 text-3xl font-normal ml-2">
        Most of our SEO campaigns double their traffic within 6 months
      </span>
    </p>
  </div>

  {/* Right Section - Image */}
  <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
    <img
      src="SEOANALYSIS.jpeg"
      alt="SEO Analytics"
      className="rounded-lg shadow-2xl w-full md:w-[95%] h-auto"
    />
  </div>
</div>





      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Service;
