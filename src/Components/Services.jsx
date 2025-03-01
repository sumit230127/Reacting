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
import logoIcon from "../Images/logo.jpeg"; // Replace with actual logo path

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
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center py-20 px-10 md:px-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold text-black">
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
        <div className="md:w-1/2">
          <img src={Whychooseus} alt="Why Choose Us" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 p-6 space-y-4 text-right">
          <h2 className="text-3xl font-bold">Why Choose Our Services?</h2>
          <p className="text-lg text-gray-700">
            We offer expert solutions tailored to your business needs. Whether it's <strong>Android Development, Web Design, Business Analytics, or Digital Marketing</strong>, we ensure top-notch quality and innovation in every project.
          </p>
          <ul className="space-y-2">
            <li>✅ <strong>Proven industry experience</strong></li>
            <li>✅ <strong>Cutting-edge technology and tools</strong></li>
            <li>✅ <strong>100% client satisfaction guarantee</strong></li>
          </ul>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col md:flex-row items-center py-20 px-10 md:px-20">
        <div className="md:w-1/2">
          <video src={websitebuildingvideo} autoPlay muted loop playsInline className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-6 text-right">
          <h2 className="text-5xl font-bold mr-20">Transform Your Vision into a Stunning Online Reality</h2>
          <p className="text-lg mr-20">
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
      <div className="flex items-center justify-between p-10 bg-white">
        <div className="w-1/2">
          <div className="flex items-center space-x-2">
            {/* Logo Image before the hyperlink */}
            <img src={logo.jpeg} alt="Logo" className="w-6 h-6" />
            <a href="your-link-here" className="text-blue-900 font-semibold hover:underline">
              Results-Driven Website Design
            </a>
          </div>
          <div className="text-4xl font-bold text-gray-800 mt-4">
            Get a beautiful website that wins customers.
          </div>
          <div className="text-gray-600 mt-4">
            Elevate your business with a trusted website that your customers will love. Our award-winning website designers will represent your brand in the best possible way. Your website will load extremely fast and look great on all devices.
          </div>
          <div className="mt-6 flex items-center">
            <div className="text-green-700 text-5xl font-bold">900+</div>
            <div className="ml-2 text-gray-700">
              Successful websites launched by our team since 2011
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="w-3/4">
            <img src={Webdevelopment} alt="Website Designs" className="w-full h-auto shadow-lg rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
