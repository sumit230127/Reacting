import React from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";
import img4 from "../Images/img4.jpeg";
import img5 from "../Images/img5.jpeg";
import img6 from "../Images/img6.jpeg";
import contentImg from "../Images/img6.jpeg";
import heroImage from "../Images/Hero-image.jpeg";
import googlePartner from "../Images/Google-partener.jpeg";
import MetaLogo from "../Images/MetaLogo.jpeg";
import amazonAds from "../Images/amazon-ads.png";
import hubspot from "../Images/hubspot.png";

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
      <div className="relative text-black py-20 px-10 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 space-y-4">
    <h2 className="text-6xl font-bold mr-20 text-black">
      Use the best digital marketing services available to outsmart the competition.
    </h2>
    <p className="text-lg mr-30">
      Get more traffic. Acquire more customers. Sell more. We offer proven strategies & reliable execution to exceed your marketing goals.
    </p>
    <div className="flex mr-20 space-x-4 mt-4">
      <img src={googlePartner} alt="Google Partner" className="h-10" />
      <img src={MetaLogo} alt="Meta Partner" className="h-10" />
      <img src={amazonAds} alt="Amazon Ads" className="h-10" />
      <img src={hubspot} alt="HubSpot" className="h-10" />
    </div>
  </div>
  <div className="md:w-1/2 mt-6 md:mt-0">
    <img src={heroImage} alt="Marketing Analytics" className="w-full h-auto rounded-full" />
  </div>
</div>


      {/* Services Section */}
      <h1 className="text-center text-4xl font-bold mt-10 mb-10">Our Services</h1>

      <div className="w-full px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image-Text Section Below Cards */}
      <div className="w-full px-10 md:px-16 lg:px-24 mt-20">
        <div className="flex flex-col md:flex-row items-center  overflow-hidden">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
  <img src={contentImg} alt="About Our Services" className="w-full h-full object-cover rounded-md" />
</div>


          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold ml-50 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg ml-50 text-gray-700">
              We offer expert solutions tailored to your business needs. Whether it's 
              <strong>Android Development, Web Design, Business Analytics, or Digital Marketing</strong>, 
              we ensure top-notch quality and innovation in every project.
            </p>
            <ul className="mt-4 ml-50 space-y-2">
              <li className="flex items-center">✅ <strong>Proven industry experience</strong></li>
              <li className="flex items-center">✅ <strong>Cutting-edge technology and tools</strong></li>
              <li className="flex items-center">✅ <strong>100% client satisfaction guarantee</strong></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative text-black py-20 px-10 flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 rounded-b-sm mt-6 md:mt-0">
    <img src={heroImage} alt="Marketing Analytics" className="w-full h-auto" />
  </div>
  <div className="md:w-1/2 space-y-4">
    <h2 className="text-6xl ml-20 font-bold text-black">
    "Transform Your Vision into a Stunning Online Reality"
    </h2>
    <p className="text-lg ml-20">
    "Your website is your digital storefront. With our creative design and technical expertise, we turn your vision into an engaging and responsive online experience that captivates your audience and drives results.".
    </p>
    <div className="flex space-x-4 ml-20 mt-4">
      <img src={googlePartner} alt="Google Partner" className="h-10" />
      <img src={MetaLogo} alt="Meta Partner" className="h-10" />
      <img src={amazonAds} alt="Amazon Ads" className="h-10" />
      <img src={hubspot} alt="HubSpot" className="h-10" />
    </div>
  </div>
</div>

    </div>
  );
};

export default Service;
